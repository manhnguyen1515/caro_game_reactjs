import React from 'react';
import { useState } from "react";

function Alert(props) {
    const [isClose, setIsClose] = useState(false);

    return (
    <div className={isClose?'game-alert-container d-none':'game-alert-container'}>
        <p className='alert-message-text'>{props.message}</p>
        <button className='alert-btn-close' onClick={()=> {setIsClose(true)}}>Close</button>
    </div>
    )
}

export default Alert;