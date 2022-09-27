import React from 'react';
import Board from './Board';
import GameSize from './GameSize';
import HistoryCell from './HistoryCell';
import Status from './Status';
import calculateWinner from './helpers/GameHelper';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(81).fill(null),
        stepValue: null,
      }],
      stepNumber: 0,
      xIsNext: true,
      xCount: 0,
      gameSize: 9,
      isPlaying: false
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares, this.state.gameSize) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState({
      history: history.concat([{
        squares: squares,
        stepValue: i
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      xCount: this.state.xIsNext ? this.state.xCount + 1 : this.state.xCount,
      isPlaying: true
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
      isPlaying: (step === 0)? false: true
    });
  }

  onGameSizeChange(size) {
    const newSize = size**2 - this.state.gameSize**2;
    this.setState({
      gameSize: size,
      history: [
        ...this.state.history,
        {
          squares: [...this.state.history[this.state.stepNumber].squares, ...Array(newSize > 0 ? newSize: -newSize).fill(null)]
        }]
    })
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares, this.state.gameSize);

    let status, positionWin;
    if (winner) {
      let text = 'Winner ' + winner.player;
      status = <Status status={text} className='text-red'/>
      positionWin = winner.positionWin;
    }
    else if(this.state.xCount >= (this.state.gameSize**2) / 2) {
      status = <Status status='Tie score' className='text-red'/>
    } else {
      let text = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      status = <Status status={text} className=''/>
      positionWin = null;
    }

    return (
      <div className="game">
        <GameSize
          isPlaying={this.state.isPlaying}
          onChange={(e)=>this.onGameSizeChange(e)}
          gameSize={this.state.gameSize}
          />
        <div className="game-container">
          <div className="game-info">
            <div>{status}</div>
            <HistoryCell 
              history={history}
              stepNumber={this.state.stepNumber}
              gameSize={this.state.gameSize}
              onClick={(i) => this.jumpTo(i)}
            />

          </div>
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
              gameSize={this.state.gameSize}
              positionWin={positionWin}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Game;