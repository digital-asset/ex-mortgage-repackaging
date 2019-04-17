import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { userByParty, UserContext } from 'src/containers/UserStore';
import styled from 'styled-components';
import MortgagePoolAgreementDraftsAdd from '../applets/draftForm/MortgagePoolAgreementDraftsAdd'
import { MortgagePoolAgreementDrafts } from '../applets/MortgagePoolAgreementDrafts'
import MortgagePoolAgreementProposals from '../applets/MortgagePoolAgreementProposals'
import MortgagePoolAgreements from '../applets/MortgagePoolAgreements'
import MortgagePools from '../applets/MortgagePools';
import { routeByName, contractsListLocation } from '../routes';

// min-heigh: 0; to make content container scrollable in firefox
// https://stackoverflow.com/questions/28636832/firefox-overflow-y-not-working-with-nested-flexbox
const Main = styled.div`
  flex-grow: 1;
  background: ${(props) => props.theme.colorBackground};
  color: ${(props) => props.theme.colorDarkBlueText};
  font-size: ${(props) => props.theme.fontSizeContent};
  display: flex;
  flex-direction: column;
  min-height: 0;
`
export const ContentContainer = styled.div`
  padding: 32px 17px 0 17px;
  flex-grow: 1;
  overflow: auto;
`

export class Content extends React.Component {
  public render() {
    return (
      <Main>
        <UserContext.Consumer>
          {
            context =>
              <Route exact={true} path="/" render={() => <Redirect
                to={contractsListLocation(userByParty[context.partyState!.party].initContractsListType)}/>
              }/>
          }
        </UserContext.Consumer>
        <Route exact={true} path={routeByName.pools.pathname} component={MortgagePools}/>
        <Route exact={true} path={routeByName.drafts.pathname} component={MortgagePoolAgreementDrafts}/>
        <Route exact={false} path={routeByName.draft.pathname} component={MortgagePoolAgreementDraftsAdd}/>
        <Route exact={true} path={routeByName.proposals.pathname} component={MortgagePoolAgreementProposals}/>
        <Route exact={true} path={routeByName.agreements.pathname} component={MortgagePoolAgreements}/>
      </Main>
    );
  }
}
