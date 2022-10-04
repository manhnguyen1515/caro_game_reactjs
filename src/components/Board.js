import React from 'react';
import Square from "./Square";

function Board(props) {
  const renderSquare = (i) => {
    return <Square
      key={i}
      number={i}
      value={props.squares[i]}
      onClick={() => props.onClick(i)}
      positionWin={props.positionWin}
      xIsNext={props.xIsNext}
    />;
  }

  const length = props.gameSize;
  return (
    <div>
      {(() => {
        let row = [];
        for (let i = 0; i < length; i++) {
          row.push(
          <div key={i} className="board-row">
            {(() => {
              let col = [];
              for (let j = 0; j < length; j++) {
                col.push(renderSquare(i * length + j));
              }
              return col;
            })()}
          </div>);
        }
        return row;
      })()}
    </div>
    )
}

export default Board;