import React from "react";
import { useState } from "react";
import Board from "./Board";
import GameSize from "./GameSize";
import HistoryCell from "./HistoryCell";
import Status from "./Status";
import Alert from "./Alert";
import SortMove from "./SortMove";
import calculateWinner from "./helpers/GameHelper";

function Game(props) {
  const [history, setHistory] = useState([{ squares: Array(81).fill(null), stepValue: null }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [xCount, setXCount] = useState(0);
  const [gameSize, setGameSize] = useState(9);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDesc, setIsDesc] = useState(false);

  const handleClick = (i) => {
    const historyClone = history.slice(0, stepNumber + 1);
    const current = historyClone[historyClone.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares, gameSize) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";

    setHistory((prev) => {
      return historyClone.concat([
        {
          squares: squares,
          stepValue: i,
        },
      ])
    });

    setStepNumber((prev) => {
      return historyClone.length
    });

    setXIsNext((prev) => {
      return !xIsNext
    });

    setXCount((prev) => {
      return xIsNext ? xCount + 1 : xCount;
    });

    setIsPlaying((prev) => {
      return true;
    });
  };

  const jumpTo = (step) => {
    setStepNumber((prev) => {
      return step;
    });
    
    setXIsNext((prev) => {
      return step % 2 === 0;
    });

    setIsPlaying((prev) => {
      return step === 0 ? false : true;
    });

    setXCount((prev) => {
      return Math.ceil(step / 2);
    });
  };

  const onGameSizeChange = (size) => {
    setGameSize((prev) => {
      return size;
    });
  };

  const reverseMove = () => {
    setIsDesc((prev) => {
      return !isDesc;
    });
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares, gameSize);

  let status, positionWin, gameAlert;
  if (winner) {
    let text = "Winner " + winner.player;
    status = <Status status={text} className="text-red" />;
    gameAlert = <Alert message={"Winner " + winner.player} />;
    positionWin = winner.positionWin;
  } else if (xCount >= gameSize ** 2 / 2) {
    status = <Status status="Tie score" className="text-red" />;
    gameAlert = <Alert message="Tie score" />;
  } else {
    let text = "Next player: " + (xIsNext ? "X" : "O");
    status = <Status status={text} className="" />;
    positionWin = null;
  }

  return (
    <div className="game">
      {gameAlert}
      <GameSize
        isPlaying={isPlaying}
        onChange={(e) => onGameSizeChange(e)}
        gameSize={gameSize}
      />
      <div className="game-container">
        <div className="game-info">
          <div>{status}</div>
          <SortMove 
            onChange={(e) => reverseMove(e)} 
          />
          <HistoryCell
            history={history}
            stepNumber={stepNumber}
            gameSize={gameSize}
            onClick={(i) => jumpTo(i)}
            isDesc={isDesc}
          />
        </div>
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => handleClick(i)}
            gameSize={gameSize}
            positionWin={positionWin}
            xIsNext={xIsNext}
          />
        </div>
      </div>
    </div>
  );
}

export default Game;
