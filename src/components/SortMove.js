import React from 'react';

function SortMove(props) {
    return(
    <div>
        <span>DESC?</span>
        <label className="switch">
            <input type="checkbox" 
            onChange={(e) => props.onChange(e.target.value)} 
            />
            <span className="slider round"></span>
        </label>
    </div>
    )
}

export default SortMove;