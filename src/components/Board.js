import React from 'react';
import Square from "./Square";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(props.gameSize**2).fill(null),
      xIsNext: true,
    };
  }

  renderSquare(i) {
    return <Square
      key={i}
      number={i}
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}
      positionWin={this.props.positionWin}
    />;
  }
  
  render() {
    const length = this.props.gameSize;
    return (
      <div>
        {(() => {
          let row = [];
          for (let i = 0; i < length; i++) {
           row.push(
           <div className="board-row">
              {(() => {
                let col = [];
                for (let j = 0; j < length; j++) {
                 col.push(this.renderSquare(i * length + j));
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
}

export default Board;