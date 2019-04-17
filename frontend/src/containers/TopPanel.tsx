import * as React from 'react';
import styled from 'styled-components';
import Select, { IOption, IProps as ISelectProps} from '../components/Select';
import { restartLedger, IUserStore, UserContext } from './UserStore';
import Loader from '../components/Loader';

const TopPanelWrapper = styled.div`
  display: block;
  height: 64px;
`
const TopPanelContainer = styled.div`
  height: 64px;
  padding-left: 17px;
  display: flex;
  align-items: center
  ${(props) => props.theme.fontHeaders}
`
const SelectContainer = styled.div`
  margin-left: 8px;
  width: 172px;
`
const StyledIcon = styled.i`
  text-shadow: 3px 3px 14px rgba(0, 0, 0, 0.6);
`

interface IProps {
  context: IUserStore
}
interface IState {
  loading: boolean,
  selectProps: ISelectProps
}
export class TopPanelWithContext extends React.Component<IProps, IState> {
  private logoutOption: IOption = {label: 'Log Out', value: 'logout'};

  private onChange(value: string): void {
    switch (value) {
      case 'logout':
        this.props.context.logic.logOut()
        break
      case 'restart':
        this.setState({loading: true})
        restartLedger(30)
        break
    }
  }

  constructor(props: IProps) {
    super(props)

    this.onChange = this.onChange.bind(this)

    const options = [this.logoutOption]

    this.state = {
      loading: false,
      selectProps: {
        currentValue: props.context.logic.user()!.name,
        minWidth: '172px',
        onChange: this.onChange,
        options,
        underline: false,
      },
    };
  }

  public render() {
    return (
      <TopPanelWrapper>
        <Loader
          loading={this.state.loading}
          message={'Please wait...'}
        />
        <TopPanelContainer>
          <StyledIcon className="icon-da-user"/>
          <SelectContainer>
            <Select {...this.state.selectProps}/>
          </SelectContainer>
        </TopPanelContainer>
      </TopPanelWrapper>
    );
  }
}

const TopPanel = () => (
  <UserContext.Consumer>
    {context =>
      <TopPanelWithContext context={context} />
    }
  </UserContext.Consumer>
)

export default TopPanel;
