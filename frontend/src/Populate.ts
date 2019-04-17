import { DaGrpc } from '@da/da-grpc'
import { EventMap } from '@da/da-grpc/dist/event_map';
import { deepStrictEqual } from 'assert';
import * as chai from 'chai'
import * as Moment from 'moment'
import { v4 as uuid } from 'uuid';
import { OperatorRights } from '../src/contracts/Roles/OperatorRights'
import { AvailableCUSIP } from './contracts/AvailableCusip/AvailableCUSIP';
import { ICUSIP, IMortgagePoolFields, IPoolTypeEnum } from './contracts/CustomTypes';
import { DelegatedRegistrationRights } from './contracts/Delegation/DelegatedRegistrationRights';
import { DelegatedSecuritizerRights } from './contracts/Delegation/DelegatedSecuritizerRights';
import * as Pool from './contracts/MortgagePool/MortgagePool'
import * as Agreement from './contracts/MortgagePool/MortgagePoolAgreement'
import * as Draft from './contracts/MortgagePool/MortgagePoolAgreementDraft'
import * as Proposal from './contracts/MortgagePool/MortgagePoolAgreementProposal'
import { MortgagePoolHolderRights } from './contracts/Roles/MortgagePoolHolderRights';
import { RegistryRights } from './contracts/Roles/RegistryRights';
import { SecuritizerRights } from './contracts/Roles/SecuritizerRights';

// tslint:disable-next-line:no-var-requires
chai.use(require('chai-subset'))

export interface IParties {
  mortgagePoolHolder: string,
  operator: string,
  registry: string,
  securitizer: string,
}

function randInt(upperExclusiveLimit: number): number {
  return Math.floor(Math.random() * upperExclusiveLimit)
}

function mkArray<T>(length: number, fun: () => T): T[] {
  return Array.apply(null, {length}).map(Function.call, fun)
}

export function consts(withSuffixes: boolean): { parties: IParties, watchedParties: string[], suffix: string } {
  const suffix = withSuffixes
    ? `-${Moment().format("DD/MMM-hh:mm:ss")}`
    : ''
  const parties = {
    mortgagePoolHolder: 'MortgagePoolHolder' + suffix,
    operator: 'Operator' + suffix,
    registry: 'Registry' + suffix,
    securitizer: 'Securitizer' + suffix,
  }
  return {
    parties,
    suffix,
    watchedParties: Object.keys(parties).map(k => parties[k]),
  }
}

export interface IContractCounts { [templateId: string]: number }

export async function allContractsCounts(daGrpc: DaGrpc): Promise<{ events: EventMap, sum: number, counts: IContractCounts }> {
  const events = await daGrpc.getList(daGrpc.watchedParties.map(party => ({ templateIds: undefined, party })))
  const counts = events.counts()
  const sum = Object
    .keys(counts)
    .reduce((acc: number, templateId: string) => acc + counts[templateId], 0)
  return { events, counts, sum }
}

function assertUniq(list: any[]){
  chai.expect(Array.from(new Set(list)).sort()).deep.eq(list.sort())
}

const getCusips = (pools: Pool.MortgagePool[]) => pools
    .map(pool => pool.argument.mortgagePoolFields.cusip.text)
    .sort()

// -------------------------------------

interface IRights {
  delegatedRegistration: DelegatedRegistrationRights,
  delegatedSecuritizer: DelegatedSecuritizerRights,
  mortgagePoolHolder: MortgagePoolHolderRights,
  operator: OperatorRights,
  registry: RegistryRights,
  securitizer: SecuritizerRights
}

const nextCusip = () => uuid().substring(0, 8)
const nextCusipList = (length: number) => Array.apply(null, {length}).map(Function.call, nextCusip)

async function mkRights({ daGrpc, parties }: IPopulate): Promise<IRights> {
  const operator = await OperatorRights.create(daGrpc, parties.operator)
  const registry = await operator.operatorOnboardRegistry(parties.registry)
  const securitizer = await operator.operatorOnboardSecuritizer(parties.securitizer)
  return {
    delegatedRegistration: await registry.registryDelegateRegistrationRights(),
    delegatedSecuritizer: await securitizer.securitizerDelegateSecuritizerRights(),
    mortgagePoolHolder: await operator.operatorOnboardMortgagePoolHolder(parties.mortgagePoolHolder),
    operator,
    registry,
    securitizer,
  }
}

async function mkCusips({ parties }: IPopulate, rights: IRights, cusips: string[]){
  const availableCusipRequest = await rights.securitizer
    .securitizerRequestCUSIPs({ registry: parties.registry, numberRequested: cusips.length })
  return await availableCusipRequest
    .registryFulfill(cusips.map(text => ({ text })))
}

async function mkPool(
  props: IPopulate,
  rights: IRights,
  underlyingCusips: ICUSIP[],
  mortgagePoolFields: IMortgagePoolFields,
): Promise<Pool.MortgagePool> {
  return await rights.registry.registryIssueMortgagePool(
    props.parties.mortgagePoolHolder,
    mortgagePoolFields,
    underlyingCusips
  )
}

interface IDraftWithLockedPools {
  draft: Draft.MortgagePoolAgreementDraft,
  lockedPools: Pool.MortgagePool[]
}

async function mkDraft(
  rights: IRights,
  mortgagePools: Pool.MortgagePool[],
  passThroughRate: number,
  poolType: IPoolTypeEnum,
): Promise<IDraftWithLockedPools> {
  const draft = await rights
    .mortgagePoolHolder
    .mortgagePoolHolderCreateMortgagePoolAgreementDraft({
      faceValue: 0.0,
      lastLoanMaturity: undefined,
      passThroughRate,
      poolType: { constructor: poolType },
      referenceNumber: uuid().substr(0, 8)
    })
  const result = await draft
    .mortgagePoolHolderSetUnderlyingPools(
      mortgagePools.map(pool => pool.cid),
      []
    )
  const lockedPools = result.lockedPools
  deepStrictEqual(getCusips(lockedPools), getCusips(mortgagePools))
  deepStrictEqual(getCusips(result.unlockedPools), [])
  return { draft: result.draft, lockedPools }

}

async function mkProposal(
  props: IPopulate, { draft, lockedPools }: IDraftWithLockedPools
): Promise<Draft.IDraftProposalResult> {
  return await draft.mortgagePoolHolderSubmitProposal(
    props.parties.securitizer,
    lockedPools.map(c => c.cid)
  )
}

async function mkAgreement(
  props: IPopulate,
  proposal: Proposal.MortgagePoolAgreementProposal,
  availableCusip: AvailableCUSIP
): Promise<Agreement.MortgagePoolAgreement> {
  return await proposal.securitizerAccept(availableCusip.cid, props.parties.registry)
}

async function mkPoolFromAgreement(
  rights: IRights,
  { agreement, underlyingMortgagePoolCids }: {
    agreement: Agreement.MortgagePoolAgreement,
    underlyingMortgagePoolCids: string[]
  }
): Promise<Pool.MortgagePool>
{
  return await rights.operator.operatorSettleMortgagePoolAgreement({
    delegatedRegistrationRightsCid: rights.delegatedRegistration.cid,
    delegatedSecuritizerRightsCid: rights.delegatedSecuritizer.cid,
    mortgagePoolAgreementCid: agreement.cid,
    underlyingMortgagePoolCids,
  })
}
// -------------------------------------

async function mkDraftWithDeps(props: IPopulate, rights: IRights, mortgagePoolsFields: IMortgagePoolFields[]) {
  const passThroughRate = mortgagePoolsFields[0].passThroughRate
  const poolType = mortgagePoolsFields[0].poolType.constructor
  const pools = await Promise.all(
    mortgagePoolsFields.map(m => mkPool(props, rights, [], m))
  )
  return await mkDraft(rights, pools, passThroughRate, poolType)
}

async function mkProposalWithDeps(props: IPopulate, rights: IRights, mortgagePoolsFields: IMortgagePoolFields[]){
  const draft = await mkDraftWithDeps(props, rights, mortgagePoolsFields)
  return await mkProposal(props, draft)
}

async function mkAgreementWithDeps(props: IPopulate, rights: IRights, mortgagePoolsFields: IMortgagePoolFields[]){
  const draftProposalResult = await mkProposalWithDeps(props, rights, mortgagePoolsFields)
  const availableCusips = await mkCusips(props, rights, nextCusipList(1))
  return {
    agreement: await mkAgreement(props, draftProposalResult.mortgagePoolAgreementProposal, availableCusips[0]),
    underlyingMortgagePoolCids: draftProposalResult.underlyingPoolCids.map(pool => pool.cid),
  }
}

async function mkPoolFromAgreementWithDeps(props: IPopulate, rights: IRights, mortgagePoolsFields: IMortgagePoolFields[]){
  return await mkPoolFromAgreement(rights, await mkAgreementWithDeps(props, rights, mortgagePoolsFields))
}

// -------------------------------------

function nextPoolFields(passThroughRate: number, poolType: IPoolTypeEnum): IMortgagePoolFields {
  const nr = randInt(10000)
  return {
    currentFaceValue: 50000000 + nr * 100,
    cusip: { text: nextCusip() },
    issueDate: Moment("1970-11-22").add(nr, 'days'),
    lastLoanMaturity: Moment("1982-11-22").add(nr, 'days'),
    originalFaceValue: 60000000 + nr*20,
    passThroughRate,
    poolType: { constructor: poolType },
  }
}

const nextPoolFieldsList = (length: number, passThroughRate: number, poolType: IPoolTypeEnum) =>
  mkArray(length, () => nextPoolFields(passThroughRate, poolType))
/*
function randElt<T>(arr: T[]): T { return arr[randInt(arr.length)] }
const randomPassThroughRate = () => randInt(3) + 2.5
const randomPoolType = () => randElt<IPoolTypeEnum>(['Floating', 'Fixed'])
const nextRandomPoolFields = () => nextPoolFields(randomPassThroughRate(), randomPoolType())
const nextRandomPoolFieldsList = (length: number) =>
  nextPoolFieldsList(length, randomPassThroughRate(), randomPoolType())
*/
// -------------------------------------

async function assertConsistency(daGrpc: DaGrpc){
  const { events } = await allContractsCounts(daGrpc)
  const availableCusips = events.getAllAsContracts(AvailableCUSIP).map(c => c.argument.cusip.text)
  assertUniq(availableCusips)
  const pools = events.getAllAsContracts(Pool.MortgagePool)
  const mortgagePoolCusips = pools.map(c => c.argument.mortgagePoolFields.cusip.text)
  assertUniq(mortgagePoolCusips)
}

export interface IPopulate { daGrpc: DaGrpc, parties: IParties }

export async function populateBig(props: IPopulate){
  const rights = await mkRights(props)
  await mkCusips(props, rights, nextCusipList(100))

  // await Promise.all(mkArray(5, () => mkPool(props, rights, [], nextRandomPoolFields())))
  Promise.all([
    mkPool(props, rights, [], nextPoolFields(3.5, 'Floating')),
    mkPool(props, rights, [], nextPoolFields(3.5, 'Floating')),
    mkPool(props, rights, [], nextPoolFields(3.5, 'Floating')),
    mkPool(props, rights, [], nextPoolFields(3.5, 'Fixed')),
    mkPool(props, rights, [], nextPoolFields(3.5, 'Fixed')),
    mkPool(props, rights, [], nextPoolFields(3.5, 'Fixed')),

    mkPool(props, rights, [], nextPoolFields(4.5, 'Floating')),
    mkPool(props, rights, [], nextPoolFields(4.5, 'Floating')),
    mkPool(props, rights, [], nextPoolFields(4.5, 'Floating')),
    mkPool(props, rights, [], nextPoolFields(4.5, 'Fixed')),
    // mkPool(props, rights, [], nextPoolFields(4.5, 'Fixed')), // generated by mkPoolFromAgreementWithDeps
  ])

  await mkPoolFromAgreementWithDeps(props, rights, nextPoolFieldsList(3, 4.5, 'Fixed'))

  await mkProposalWithDeps(props, rights, nextPoolFieldsList(2, 4.5, 'Floating'))
  await mkAgreementWithDeps(props, rights, nextPoolFieldsList(2, 3.5, 'Fixed'))

  // =====
  // test mortgagePoolHolderSetUnderlyingPools:
  /*
  const passThroughRate = randomPassThroughRate()
  const poolType = randomPoolType()
  const pool = await mkPool(props, rights, [], nextPoolFields(passThroughRate, poolType))
  const { draft, lockedPools } = await mkDraftWithDeps(
    props,
    rights,
    nextPoolFieldsList(2, passThroughRate, poolType)
  )
  const editedDraftResult = await draft
    .mortgagePoolHolderSetUnderlyingPools(
      [pool.cid, lockedPools[0].cid],
      lockedPools.map(p => p.cid)
    )
  deepStrictEqual(
    getCusips([pool, lockedPools[0]]),
    editedDraftResult.draft.getUnderlyingCusips().sort(),
  )
  */
  // =====
  // await mkDraftWithDeps(props, rights, nextRandomPoolFieldsList(2))
  // await mkDraftWithDeps(props, rights, nextRandomPoolFieldsList(2))
  // await mkProposalWithDeps(props, rights, nextRandomPoolFieldsList(2))
  // await mkProposalWithDeps(props, rights, nextRandomPoolFieldsList(2))
  // await mkAgreementWithDeps(props, rights, nextRandomPoolFieldsList(3))
  // await mkAgreementWithDeps(props, rights, nextRandomPoolFieldsList(4))
  // await mkPoolFromAgreementWithDeps(props, rights, nextRandomPoolFieldsList(3))
  // await mkPoolFromAgreementWithDeps(props, rights, nextRandomPoolFieldsList(4))

  assertConsistency(props.daGrpc)
}

