import React from 'react';

class SortMove extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return(
        <div>
            <span>DESC?</span>
            <label className="switch">
                <input type="checkbox" 
                onChange={(e) => this.props.onChange(e.target.value)} 
                />
                <span className="slider round"></span>
            </label>
        </div>
        )
    }
}

export default SortMove;