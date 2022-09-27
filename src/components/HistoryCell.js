import React from 'react';

class HistoryCell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        const moves = this.props.history.map((step, move) => {
            const desc = move ?
              'Go to move #' + move :
              'Go to game start';

              console.log(step.stepValue)

            const currentValue = step.stepValue;
            const row = currentValue != null?Math.floor(currentValue / this.props.gameSize): '';
            const column = currentValue != null?currentValue % this.props.gameSize : '';
            
            return (
              <li key={move}>
                <button 
                  className={move === this.props.stepNumber? 'btn-hightlight' : ''}
                  onClick={() => this.props.onClick(move)}
                >
                  {desc}
                  <span className='history-coor'>({column}, {row})</span>
                </button>
              </li>
            );
          });

        return(
            <ol>{moves}</ol>
        )
        
    }

    
}

export default HistoryCell;