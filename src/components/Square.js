import React from 'react';
import { useState } from 'react';

function Square(props) {
  let  className = 'square';
  let value = props.value;
  const [isHover, setIsHover] = useState();

  if(props.positionWin != null) {
    className = props.positionWin.includes(props.number) ? 'square square-hightlight text-red' : 'square'
  }
  else {
    className = value === 'X' ? 'square text-blue' : 'square text-green';
  }

  if(isHover && props.value === null) {
    value = props.xIsNext ? 'X' : 'O';
    className = 'square text-grey';
  }
  
  return (
    <button
      className={className}
      onClick={props.onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {value}
    </button>
  );
}

export default Square;