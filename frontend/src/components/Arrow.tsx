import * as React from 'react';

export function Arrow(props: { direction?: boolean }){
  const cls = props.direction === undefined
    ? 'icon-da-sort-unfilled'
    : 'icon-da-sort-filled'
  const deg = (props.direction === undefined ? true : props.direction)
    ? 180
    : 0
  return <span style={{
    display: 'inline-block',
    marginLeft: 6,
    paddingBottom: 3,
    transform: `rotate(${deg}deg)`,
  }}>
    <i style={{ fontSize: 6 }} className={cls}/>
  </span>
}