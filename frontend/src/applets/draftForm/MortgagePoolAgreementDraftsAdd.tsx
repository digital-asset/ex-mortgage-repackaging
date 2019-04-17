import * as React from 'react';
import { ContentContainer } from 'src/containers/Content';
import HeaderBackLink from 'src/containers/HeaderBackLink'
import { IUserStore, UserContext } from 'src/containers/UserStore';
import { MortgagePoolAgreementDraft } from 'src/contracts/MortgagePool/MortgagePoolAgreementDraft';
import { MortgagePoolAgreementProposal } from 'src/contracts/MortgagePool/MortgagePoolAgreementProposal';
import { routeByName } from 'src/routes';
import theme from 'src/theme';
import styled from 'styled-components';
import * as SectionAllocations from './SectionAllocations'
import * as SectionDetails from './SectionDetails'
import * as SectionReview from './SectionReview'
import { RouteComponentProps } from 'react-router';

const Title = styled.div`
  font-size: ${props => props.theme.fontSizeHeadersLarge};
  font-weight: 700;
  margin-bottom: 30px;
`
const Spacer = styled.div`
  margin: 24px 0 20px 0;
  height: 2px;
  background: ${props => props.theme.colorFaded};
`

function Notify({msg, color, icon}: {msg: string, color?: string, icon: string}) {
  return <span style={{color, display: 'block', marginBottom: 4}}>
    <i className={icon} style={{fontSize: 11}} /><span style={{marginLeft: 8, display: "inline-block"}}>{msg}</span>
  </span>
}

type IProps = RouteComponentProps<{ref?: string}> & { context: IUserStore }

type IState
  = { section: 1 }
  | { section: 2, draft: MortgagePoolAgreementDraft, isEditMode: boolean }
  | { section: 3, draft: MortgagePoolAgreementDraft }
  | { section: 4, draft: MortgagePoolAgreementDraft, proposal: MortgagePoolAgreementProposal }

class MortgagePoolsAgreementDraftsAddWithContext extends React.Component<IProps, IState> {
  constructor(props: IProps & { context: IUserStore }){
    super(props)
    const draft = props.match.params.ref
      ? props.context.logic.contracts.draftByReference(decodeURIComponent(props.match.params.ref))
      : undefined
    this.state = draft
      ? draft.getUnderlyingCusips().length > 0
        ? { draft, section: 3 }
        : { draft, section: 2, isEditMode: true }
      : { section: 1 }
  }

  public render() {
    return ([
      <HeaderBackLink
        key='0'
        to={routeByName.drafts.pathname}
        label={'Back to List'}
      />,
      <ContentContainer key='1'>
        <Title>New Mortgage Pool Agreement Draft</Title>
          <Subtitle
            marker={1}
            subtitle={'Details'}
            active={true}
          >
            {
              this.state.section !== 1 &&
              <Notify
                msg={`New Mortgage Pool Agreement Draft Created (Reference #${this.state.draft.argument.agreementDraftFields.referenceNumber})`}
                color={theme.colorNotification}
                icon="icon-da-check"
              />
            }
          </Subtitle>
            { this.state.section === 1
              ? <SectionDetails.New onCreate={draft => this.setState({ draft, section: 2, isEditMode: true }) } />
              : <SectionDetails.Show draft={this.state.draft} />
            }
          <Spacer/>
          <Subtitle
            marker={2}
            subtitle={'Allocations'}
            active={this.state.section > 1}
          >
            {
              (this.state.section === 3 || this.state.section === 4) &&
              <Notify
                msg={`You have successfully allocated collateral (Reference #${this.state.draft.argument.agreementDraftFields.referenceNumber})`}
                color={theme.colorNotification}
                icon="icon-da-check"
              />
            }
          </Subtitle>
          {(() => {
            const showAllocations = (draft: MortgagePoolAgreementDraft, editable: boolean) =>
              <SectionAllocations.Show
                draft={draft}
                onClick={editable ? () => this.setState({ section: 2, isEditMode: true }) : undefined}
              />
            switch (this.state.section) {
              case 1: return ''
              case 2: return this.state.isEditMode
                ? <SectionAllocations.Edit
                    draft={this.state.draft}
                    onAllocate={draft => {
                      const valid = draft.getUnderlyingCusips().length > 0
                      this.setState(valid
                        ? { draft, section: 3, isEditMode: false }
                        : { draft, section: 2, isEditMode: false }
                      )
                    }}
                  />
                : showAllocations(this.state.draft, true)
              case 3: return showAllocations(this.state.draft, true)
              case 4: return showAllocations(this.state.draft, false)
            }
          })()}
          <Spacer/>
          <Subtitle
            marker={3}
            subtitle={'Review and Submit'}
            active={this.state.section > 2}
          >
            {
              this.state.section === 4 && [
                <Notify
                  key='notify'
                  msg="Mortgage Pool Agreement Proposal has been completed."
                  color={theme.colorNotification}
                  icon="icon-da-check"
                />,
                <Notify
                  key='message'
                  msg='Counterparty has been notified.'
                  icon="icon-da-message"
                />,
              ]
            }
          </Subtitle>
          {(() => {
            switch (this.state.section) {
              case 1: return ''
              case 2: return ''
              case 3: return <SectionReview.Edit
                  draft={this.state.draft}
                  onSubmit={proposal => this.setState({ section: 4, proposal })}
                />
              case 4: return SectionReview.Show(this.state.proposal)
            }
          })()}
      </ContentContainer>
    ])
  }
}

const Subtitle: React.StatelessComponent<{
  marker: number,
  subtitle: string,
  active: boolean
}> =
  ({ marker, subtitle, active, children }) => {
    const SubtitleContainer = styled.div`
      font-weight: 700;
      ${props => active ? 'padding-bottom: 24px;' : 'color: ' + props.theme.colorDisabledSubtitle + ';'}

    `
    const Marker = styled.span`
      ${props => props.theme.fontHeaders};
      color: ${props => active
        ? props.theme.colorButtonPrimaryDefault
        : props.theme.colorDisabledSubtitle
      };
      font-size: ${props => props.theme.fontSizeButtons};
      margin-right: 8px;
    `
    const Notifier = styled.div`
      float: right;
      font-size: ${theme.fontSizeNotifications};
      text-align: right;
    `
    return (
      <SubtitleContainer>
        <Marker>{marker}</Marker>{subtitle}
        <Notifier>{children}</Notifier>
      </SubtitleContainer>)
}

export default function MortgagePoolsAgreementDraftsAdd(props: RouteComponentProps<{ref?: string}>){
  return <UserContext.Consumer>
    { context => context
        .logic
        .contracts
        .if(_ => <MortgagePoolsAgreementDraftsAddWithContext {...props} context={context} />)
        || 'Loading...'
    }
  </UserContext.Consumer>
}
