/*
 * Copyright (c) 2019, Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import { DamlLfValue } from '@da/ui-core';

export const version = {
    schema: 'navigator-config',
    major: 2,
    minor: 0
};

export function theme(userId, party, role) {
    return (party == "Operator" ?
                { documentBackground: "#344a83" } :
            party == "Securitizer" ?
                { documentBackground: "#4c566e" } :
            party == "MortgagePoolHolder" ?
                { documentBackground: "Grey" } :
            party == "Registry" ?
                { documentBackground: "#6f639e" } :
                { documentBackground: "#800000" });
  };

// --- Creating views --------------------------------------------------------------------

const getPools =
    r => {
        if (r.underlyingPools) {
            return Object.values(r.underlyingPools)
                         .map(pool => pool.cusip.text)
                         .join(", ");
        } else {
            return "-";
        }
    }

const mgpoolAgrDrafts = createTab("Mortg.Pool Agr. Drafts", ":MortgagePoolAgreementDraft@", [
    createIdCol(),
    createCol("mortgagePoolHolder"),
    createCol("operator"),
    createCol("underlyingPools", "Underlying Pools", null, getPools, false)
]);

const mgpoolAgrProps = createTab("Mortg.Pool Agr. Props.", ":MortgagePoolAgreementProposal@", [
    createIdCol(),
    createCol("mortgagePoolHolder"),
    createCol("securitizer"),
    createCol("operator"),
    createCol("passThroughRate", "PassThrough Rate", null, r => r.agreementFields.passThroughRate),
    createCol("poolType", "poolType", null, r => getObjectProp1(r.agreementFields.poolType)),
]);

const mgpoolAgrs = createTab("Mortg.Pool Agreements", ":MortgagePoolAgreement@", [
    createIdCol(),
    createCol("mortgagePoolHolder"),
    createCol("securitizer"),
    createCol("operator"),
    createCol("passThroughRate", "PassThrough Rate", null, r => r.agreementFields.passThroughRate),
    createCol("poolType", "poolType", null, r => getObjectProp1(r.agreementFields.poolType)),
]);

const mgpool = createTab("Mortgage Pool", ":MortgagePool@", [
    createIdCol(),
    createCol("owner"),
    createCol("operator"),
    createCol("passThroughRate", "PassThrough Rate", null, r => r.mortgagePoolFields.passThroughRate),
    createCol("poolType", "poolType", null, r => getObjectProp1(r.mortgagePoolFields.poolType)),
]);

const operator = createTab("Operator Role", ":OperatorRights@", [
    createIdCol(),
    createCol("operator")
]);

const poolHolder = createTab("Pool Holder Role", ":MortgagePoolHolderRights@", [
    createIdCol(),
    createCol("mortgagePoolHolder"),
    createCol("operator")
]);

const registry = createTab("Registry Role", ":RegistryRights@", [
    createIdCol(),
    createCol("registry"),
    createCol("operator")
]);

const securitizer = createTab("Securitizer Role", ":SecuritizerRights@", [
    createIdCol(),
    createCol("securitizer"),
    createCol("operator")
]);

const availableCusips = createTab("Available CUSIPs", ":AvailableCUSIP@", [
    createIdCol(),
    createCol("securitizer"),
    createCol("registry"),
    createCol("cusip", "CUSIP", null, r => r.cusip.text)
]);

// --- Assigning views to parties --------------------------------------------------------------------

export const customViews = (userId, party, role) => {
    if (party == 'Operator') {
        return {
            operator,
            mgpool,
            mgpoolAgrDrafts,
            mgpoolAgrProps,
            mgpoolAgrs
        };
    }

    if (party == 'Securitizer') {
        return {
            securitizer,
            mgpool,
            mgpoolAgrDrafts,
            mgpoolAgrProps,
            mgpoolAgrs,
            availableCusips
        };
    }

    if (party == 'MortgagePoolHolder') {
        return {
            poolHolder,
            mgpool,
            mgpoolAgrDrafts,
            mgpoolAgrProps,
            mgpoolAgrs
        };
    }

    if (party == 'Registry') {
        return {
            registry,
            mgpool,
            mgpoolAgrDrafts,
            mgpoolAgrProps,
            mgpoolAgrs
        };
    }

    return {
    };
};


// --- Helpers --------------------------------------------------------------------

/**
 title, width and proj are optional

 if proj is null and key is "id" then it will default to the contract id
 if proj is null and key is not "id" then it will default to stringified single or array value of rowData.key
*/
function createCol(key, title = toTitle(key), width = 80, proj, format=true) {
    return {
        key: key,
        title: title,
        createCell: ({ rowData }) => ({
            type: "text",
            value: valueFunction(rowData, key, proj, format)
        }),
        sortable: true,
        width: width,
        weight: 0,
        alignment: "left"
    };
}

function createIdCol() {
    return createCol("id", "Contract ID", 60);
}

function createTab(name, templateId, columns, additionalFilter) {
    var filter;
    if (additionalFilter == null) {
        filter =
        [
            {
                field: "template.id",
                value: templateId
            }
        ]
    } else {
        filter =
        [
            {
                field: "template.id",
                value: templateId
            },
            additionalFilter
        ]
    }
    return {
        type: "table-view",
        title: name,
        source: {
            type: "contracts",
            filter: filter,
            search: "",
            sort: [
                {
                    field: "id",
                    direction: "ASCENDING"
                }
            ]
        },
        columns: columns
    };
}


function formatIfNum(val) {
    var n = Number(val);
    if (Number.isNaN(n)) return val;
    else return n.toLocaleString();
}

function valueFunction(rowData, key, proj, format=true) {
    return (
        proj == null
        ?
        (
            Array.isArray(DamlLfValue.toJSON(rowData.argument)[key])
            ?
            DamlLfValue.toJSON(rowData.argument)[key].join(", ")
            :
            (
                key == "id"
                ?
                rowData.id
                :
                format ? formatIfNum(DamlLfValue.toJSON(rowData.argument)[key]) : DamlLfValue.toJSON(rowData.argument)[key]
            )
        )
        :
        format ? formatIfNum(proj(DamlLfValue.toJSON(rowData.argument))) : proj(DamlLfValue.toJSON(rowData.argument)));
}

// inserts spaces into the usually camel-case key
// e.g. "assetISINCode" -> "Asset ISIN Code"
function toTitle(key) {
    var spaced = key.replace(/([^A-Z])([A-Z])/g, '$1 $2').replace(/([A-Z])([A-Z][^A-Z])/g, '$1 $2');
    return spaced[0].toUpperCase() + spaced.substr(1)
}

function getObjectProp1(o) {
    return Object.keys(o)[0];
}

