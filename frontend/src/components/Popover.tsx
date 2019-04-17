import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Overlay } from 'react-overlays';
import styled from 'styled-components';
import Tooltip from './Tooltip';

const PositionContainer = styled.div`
  position: absolute;
  z-index: 999;
`
const Wrapper = styled.div`
  display: inline;
`

export type InteractionType
  = 'target'
  | 'content'
  | 'outside';

export type Placement
  = 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end';

export const placementStrings: Placement[] = [
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'left-start',
  'left-end',
  'right',
  'right-start',
  'right-end',
];

export type PopoverPosition =
  Placement
  | 'inline';

// tslint:disable-next-line no-any
export type AnyReactElement = React.ReactElement<any>;

export interface IProps {
  /** Content displayed in the Popover */
  content: JSX.Element;

  /** Target element (anchor for popover position). */
  target: JSX.Element;

  /** Whether to display an arrow */
  arrow?: boolean;

  /** Margin between popover and target */
  margin?: number;

  /** Whether the popover is open (visible) */
  isOpen: boolean;

  /** Popover position, relative to target */
  position: PopoverPosition;

  onInteraction?(type: InteractionType, isOpen: boolean): void;
}

const defaultMargin = 6;

export default class Popover extends React.Component<IProps, {}> {
  private target: React.ReactInstance | null = null;
  private targetNode: Node | null = null;
  // @ts-ignore content value is never read
  private content: React.ReactInstance | null = null;
  private contentNode: Node | null = null;

  public constructor(props: any) {
    super(props);
  }

  public componentDidMount() {
    document.addEventListener('click', this.onClickDocument, true);
  }

  public componentWillUnmount() {
    document.removeEventListener('click', this.onClickDocument, true);
  }

  public handleDocumentClick(e: MouseEvent) {
    if (
      !(this.targetNode && this.targetNode.contains(e.target as Node)) &&
      !(this.contentNode && this.contentNode.contains(e.target as Node)) &&
      this.props.isOpen
    ) {
      this.onInteraction('outside');
    }
  }

  public cloneTarget(target: JSX.Element | undefined) {
    if (!target) {
      return undefined;
    } else {
      return React.cloneElement(target, {
        onClick: (e: React.MouseEvent<HTMLElement>) => {
          if (target.props.onClick) {
            target.props.onClick(e);
          }
          if (this.props.onInteraction) {
            this.onInteraction('target');
          }
        },
        ref: (c: React.ReactInstance ) => {
          this.target = c;
          this.targetNode = this.findDOMNode(c);
          if (target.props.ref) {
            target.props.ref(c);
          }
        },
      });
    }
  }

  public getNextState(type: InteractionType, isOpen: boolean): boolean {
    if (type === 'target') {
      // Toggling via target
      return !isOpen;
    } else if (type === 'content' && isOpen) {
      // Closing via content
      return false;
    } else if (type === 'outside' && isOpen) {
      // Closing via outside click
      return false;
    } else {
      return isOpen;
    }
  }

  public onInteraction(type: InteractionType) {
    if (this.props.onInteraction) {
      const isOpen = this.props.isOpen;
      this.props.onInteraction(type, this.getNextState(type, isOpen));
    }
  }

  public render() {
    const {
      arrow = true,
      content,
      isOpen,
      margin = defaultMargin,
      position,
      target,
    } = this.props;

    const tooltipRef = (c: any) => {
      this.content = c;
      this.contentNode = this.findDOMNode(c);
    }

    return (
      <Wrapper>
        {this.cloneTarget(target)}
        {position === 'inline' ? (
          isOpen ? (
            <PositionContainer>
              <Tooltip
                placement={'bottom'}
                arrow={arrow}
                margin={margin}
                ref={tooltipRef}
                onClick={() => this.onInteraction('content')}
              >
                {content}
              </Tooltip>
            </PositionContainer>
          ) : null
        ) : (
        <Overlay
          show={isOpen}
          // tslint:disable-next-line:no-any -- library typings are not up to date
          placement={position as any}
          container={document.body}
          target={() => this.findDOMNode(this.target)}
          shouldUpdatePosition={true}
        >
          <PositionContainer>
            <Tooltip
              // tslint:disable-next-line:no-any -- library typings are not up to date
              placement={position as any}
              arrow={arrow}
              margin={margin}
              ref={tooltipRef}
              onClick={() => this.onInteraction('content')}
            >
              {content}
            </Tooltip>
          </PositionContainer>
        </Overlay>)}
      </Wrapper>
    );
  }

  private onClickDocument: (e: MouseEvent) => void = (e) => this.handleDocumentClick(e);

  private findDOMNode = (c: any) => c ? ReactDOM.findDOMNode(c) : null
}
