import React from 'react';

class GameSize extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
        <div className="game-size">
            <input 
            type="range" 
            min={3}
            max={100}
            className="game-size-input" 
            defaultValue={this.props.gameSize}
            onChange={(e) => this.props.onChange(e.target.value)} 
            disabled={this.props.isPlaying}
            />
        </div>
        );
      }
}

export default GameSize;