import * as React from 'react';
import { ClipLoader } from 'react-spinners';
import styled from 'styled-components';
import Modal from './Modal'
import { css } from 'react-emotion';

const ModalContent = styled.div`
  width: 350px;
  height: 90px;
  display: flex;
  align-items: center;
`
const loaderStyles = css`
  display: inline-block;
  margin: 0 1.5rem 0 1.5rem;
`;
const Header = styled.span`
  color: #283868;
  font-weight: 600;
  font-size: 1.2rem;
  display: inline-block;
`

const modalContent = (loading: boolean, message: string) => (
  <ModalContent>
      <ClipLoader
          className={loaderStyles}
          sizeUnit={'px'}
          size={30}
          color={'#5985D6'}
          loading={loading}
      />
      <Header>
        {message}
      </Header>
  </ModalContent>
);

interface IProps {
  loading: boolean,
  message: string,
}

export default class AwesomeComponent extends React.Component<IProps, {}> {
  public render() {
    return (
      <Modal
        isOpen={this.props.loading}
        content={modalContent(this.props.loading, this.props.message)}
        onHide={() => undefined}
      />
    )
  }
}
