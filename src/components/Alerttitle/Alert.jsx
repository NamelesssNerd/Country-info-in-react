import React, { useState } from 'react';
import './alert.scss';

const Alert = () => {
    const [num, setnum] = useState(0)
    const callme = () => {
        setnum(num + 1);
        document.title = `Clicked ${num}`;
    }
    return (
        <div className="container">
            <button onClick={callme}>Click Here</button>
        </div>
    )
}

export default Alert