function calculateWinner(squares, size) {
  // const length = squares.length;
  const gameSize = parseInt(size);
  const winner = { player: '', positionWin: []}
  
  for (let i = 0; i < gameSize; i++) {
    for (let j = 0; j < gameSize; j++) {
      const current = j + i * gameSize;
      if(squares[current] != null) {
        const flag = squares[current];
        if(current + 5 <= gameSize*(i + 1) && flag === squares[current + 1] && flag === squares[current + 2] && flag === squares[current + 3] && flag === squares[current + 4]) {
          winner.player = flag;
          winner.positionWin = [current, current + 1, current + 2, current + 3, current + 4];
          return winner;
        }
        
        if(flag === squares[current + gameSize] && flag === squares[current + gameSize*2] && flag === squares[current + gameSize*3] && flag === squares[current + gameSize*4]) {
          winner.player = flag;
          winner.positionWin = [current, current + gameSize, current + gameSize*2, current + gameSize*3, current + gameSize*4];
          return winner;
        }
    
        if(flag === squares[current + gameSize + 1] && flag === squares[current + gameSize*2 + 2] && flag === squares[current + gameSize*3 + 3] && flag === squares[current + gameSize*4 + 4]) {
          winner.player = flag;
          winner.positionWin = [current, current + gameSize + 1, current + gameSize*2 + 2, current + gameSize*3 + 3, current + gameSize*4 + 4];
          return winner;
        }
  
        if(flag === squares[current + gameSize - 1] && flag === squares[current + gameSize*2 - 2] && flag === squares[current + gameSize*3 - 3] && flag === squares[current + gameSize*4 - 4]) {
          winner.player = flag;
          winner.positionWin = [current, current + gameSize - 1, current + gameSize*2 - 2, current + gameSize*3 - 3, current + gameSize*4 - 4];
          return winner;
        }
    }
    }
  }
  
  return null;
}

// function isTie(squares) {
//   squares.forEach(element => {
//     if(element == null) return false;
//   });
//}

  export default calculateWinner;