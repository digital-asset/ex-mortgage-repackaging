import * as React from 'react';
import Button from 'src/components/Button';
import { Checkbox } from 'src/components/Checkbox';
import { WaitingButton } from 'src/components/WaitingButton';
import AllocationsList from 'src/containers/AllocationsList';
import { IUserStore, UserContext } from 'src/containers/UserStore';
import { MortgagePool } from 'src/contracts/MortgagePool/MortgagePool';
import { MortgagePoolAgreementDraft } from 'src/contracts/MortgagePool/MortgagePoolAgreementDraft';

export interface IShow {
  draft: MortgagePoolAgreementDraft,
  onClick?: () => void
}

function draftPools(draft: MortgagePoolAgreementDraft, context: IUserStore){
  return context.logic.contracts.poolsByCusips(draft.getUnderlyingCusips())
}

export function Show({ draft, onClick }: IShow){
  return <UserContext.Consumer>
    {context => {
      const pools = draftPools(draft, context)
      return pools && [
        <AllocationsList key='list' allocations={pools}/>,
        <div key='spacer' style={{height: '1px'}}/>,
        onClick && <Button styling='plain' key='button' onClick={onClick}>Add or remove collateral</Button>
      ]
    }}
  </UserContext.Consumer>
}

export interface IEdit {
  draft: MortgagePoolAgreementDraft,
  onAllocate(draft: MortgagePoolAgreementDraft): void
}

export class Edit extends React.Component<IEdit, { checked: Set<string> }> {
  public state = { checked: new Set(this.props.draft.getUnderlyingCusips()) }

  private onChangeRecord(pool: MortgagePool, value: boolean){
    this.setState(prevState => {
      prevState.checked[value ? 'add' : 'delete'](pool.argument.mortgagePoolFields.cusip.text)
      return prevState
    })
  }

  private isChecked(pool: MortgagePool){
    return this.state.checked.has(pool.argument.mortgagePoolFields.cusip.text)
  }

  private async allocate(context: IUserStore): Promise<void>{
    const draft = await this.props.draft.mortgagePoolHolderSetUnderlyingCusips(
      Array.from(this.state.checked.values()),
      context
    )
    context.logic.contracts.setVisited([draft], false)
    await context.logic.contracts.reload()
    this.props.onAllocate(draft)
  }

  public render(){
    return <UserContext.Consumer>
      {context => {
        const draft = this.props.draft
        const passThroughRate = draft.argument.agreementDraftFields.passThroughRate
        const poolType = draft.argument.agreementDraftFields.poolType.constructor
        const list = context.logic.contracts.if(contracts => {
          const selectedPools = draftPools(draft, context)!
          const selectedPoolsCidSet = new Set(selectedPools.map(pool => pool.cid))
          const availablePools = contracts.pools.filter(pool =>
            !pool.argument.isLocked &&
            pool.argument.mortgagePoolFields.poolType.constructor === poolType &&
            pool.argument.mortgagePoolFields.passThroughRate === passThroughRate &&
            !selectedPoolsCidSet.has(pool.cid)
          )
          return <AllocationsList key="list"
            allocations={[...selectedPools, ...availablePools]}
            cusipColumn={{
              label: 'CUSIP #',
              renderer: pool => <Checkbox
                label={pool.argument.mortgagePoolFields.cusip.text}
                onChange={value => this.onChangeRecord(pool, value)}
                value={this.isChecked(pool)}
              />,
              size: '**',
              toSortable: pool => pool.argument.mortgagePoolFields.cusip.text,
            }}
          />
        })
        const button = <div style={{marginTop: '29px'}} key="button">
          <WaitingButton
            onClick={() => this.allocate(context)}
            styling={'primary'}
            loading="Allocating..."
          >
            Allocate
          </WaitingButton>
        </div>
        return [list, button]
      }}
    </UserContext.Consumer>
  }
}
