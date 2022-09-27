import React from 'react';

class Status extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
       return <div className={this.props.className}>
        {this.props.status}
       </div>
    }
}

export default Status;