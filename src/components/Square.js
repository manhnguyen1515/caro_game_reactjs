import React from 'react';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: null,
        };
      }

    render() {
      let  className = 'square';
      if(this.props.positionWin != null) {
        className = this.props.positionWin.includes(this.props.number) ? 'square text-red' : 'square'
      }
      return (
        <button 
          className={className}
          onClick={() => this.props.onClick()}
        >
          <span className="text-small">{this.props.number}</span>
          {this.props.value}
        </button>
      );
    }
}

export default Square;