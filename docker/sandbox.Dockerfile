#
# Copyright (c) 2019, Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
# SPDX-License-Identifier: Apache-2.0
#

FROM ubuntu:18.04

ARG sdk_version=0.13.12

WORKDIR /home/sdk

COPY target/mortgage-repackaging.dar /home/sdk/
COPY scripts/install-daml.sh /home/sdk/

RUN /bin/bash -c "apt-get update --no-show-upgraded &&  apt-get install wget openjdk-8-jdk -y"
RUN /home/sdk/install-daml.sh ${sdk_version}

EXPOSE 7600

CMD ~/.daml/bin/daml sandbox -- --port 7600 --scenario Tests.MortgagePoolAgreementDraftTests:addPoolToUnderlyingAllosUsToAddMultiplePools mortgage-repackaging.dar
