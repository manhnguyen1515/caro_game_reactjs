import React from 'react';

class Alert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClose: false,
        }
    }

    render() {
        return (<div className={this.state.isClose?'game-alert-container d-none':'game-alert-container'}>
            <p className='alert-message-text'>{this.props.message}</p>
            <button className='alert-btn-close' onClick={()=> {this.setState({isClose: true})}}>Close</button>
        </div>)
    }

}

export default Alert;