import React from 'react';
import './index.css';
export default (props) => {

    const style = {
        left: `$(props.dot[0])%`,
        top: `$(props.dot[i])%`
    }
    return (
        <div className="snake-food" style={style}> </div>
    )

}