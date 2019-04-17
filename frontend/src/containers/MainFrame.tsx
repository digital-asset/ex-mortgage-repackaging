import * as React from 'react';
import styled from 'styled-components';
import * as Content from './Content';
import { Nav } from './Nav';
import TopPanel from './TopPanel';

const LeftColumn = styled.div`
  width: calc(200px + ${(props) => props.theme.appMargin});
`
const RightColumn = styled.div`
  flex-grow: 1;
  margin-right: ${(props) => props.theme.appMargin};
  display: flex;
  flex-direction: column;
`

export default class MainFrame extends React.Component {
  public render() {
    return ([
      <LeftColumn key='0'>
        <Nav/>
      </LeftColumn>,
      <RightColumn key='1'>
        <TopPanel/>
        <Content.Content/>
      </RightColumn>
    ]);
  }
}
