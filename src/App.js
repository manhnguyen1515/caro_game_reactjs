// import { Fragment } from 'react';
import Game from "./components/Game";
import GameStyle from "./components/GameStyle";

function App() {
  return (
    <div className="App">
      <GameStyle>
        <Game />
      </GameStyle>
    </div>
  );
}

export default App;
