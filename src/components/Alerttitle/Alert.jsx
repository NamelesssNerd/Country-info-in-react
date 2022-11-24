import React, { useEffect, useState } from 'react';
import './alert.scss';

const Alert = () => {
    const [num, setnum] = useState(0)
    useEffect(()=>{
        document.title = `Clicked ${num}`;
    })
    const callme = () => {
        setnum(num + 1);
    }
    return (
        <div className="container">
            <button onClick={callme}>Click Here</button>
        </div>
    )
}
export default Alert