import React from 'react';

function Status(props) {
    return (
    <div className={props.className}>
        {props.status}
    </div>
    )
}

export default Status;