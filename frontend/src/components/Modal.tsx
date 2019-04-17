import * as React from 'react';
import { Modal as ROModal } from 'react-overlays';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline;
`
const PositionContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;
const ContentOuterContainer = styled.div`
  box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1),
    0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
  transform: scale(1);
  display: inline-block;
  border-radius: ${({ theme }) => theme.tooltipRadius};
`;
const ContentInnerContainer = styled.div`
  padding: 0;
  border-radius: ${({ theme }) => theme.tooltipRadius};
  background-color: ${({ theme }) => theme.colorBackground};
  height: 100%;
  width: 100%;
`

export interface IProps {
  content: JSX.Element;
  isOpen: boolean;
  onHide?(): void;
}

export default class Modal extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    const {
      content,
      isOpen,
    } = this.props;

    return (
      <Wrapper>
        <ROModal
          show={isOpen}
          backdrop={true}
          container={document.body}
          onHide={this.props.onHide}
          backdropStyle={{
            backgroundColor: 'rgb(0, 0, 0)',
            bottom: '0px',
            left: '0px',
            opacity: 0.5,
            position: 'fixed',
            right: '0px',
            top: '0px',
            zIndex: 'auto',
          }}
        >
          <PositionContainer>
            <ContentOuterContainer>
              <ContentInnerContainer>
                {content}
              </ContentInnerContainer>
            </ContentOuterContainer>
          </PositionContainer>
        </ROModal>
      </Wrapper>
    );
  }
}
