import React from 'react';
import './Button.css'

function Button({children, height=24}) {
    return (
        <div className={'Button'} style={{height: `${height}px`}}>{children}</div>
    );
}

export default Button;