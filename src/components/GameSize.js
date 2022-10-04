import React from 'react';

function GameSize (props) {

    return (
    <div className="game-size">
        <input 
        type="range" 
        min={3}
        max={35}
        className="game-size-input" 
        defaultValue={props.gameSize}
        onChange={(e) => props.onChange(e.target.value)} 
        disabled={props.isPlaying}
        />
    </div>
    );
}

export default GameSize;