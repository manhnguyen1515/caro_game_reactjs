import React from 'react';

function HistoryCell(props) {
  const generateMoveItem = (step, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';

    const currentValue = step.stepValue;
    const row = currentValue != null?Math.floor(currentValue / props.gameSize): '';
    const column = currentValue != null?currentValue % props.gameSize : '';
    
    return (
      <li key={move}>
        <button 
          className={move === props.stepNumber? 'btn-hightlight' : ''}
          onClick={() => props.onClick(move)}
        >
          {desc}
          <span className='history-coor'>({column}, {row})</span>
        </button>
      </li>
    );
  }

  const generateMoves = () => {
    let moves = props.history.map((step, move) => generateMoveItem(step, move));
    if(props.isDesc) {
      return moves.slice(0).reverse();
    }
    return moves;
  }

  const moves = generateMoves();

  return(
      <ol>{moves}</ol>
  )
}

export default HistoryCell;