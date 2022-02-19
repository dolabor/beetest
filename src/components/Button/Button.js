import React from 'react';
import './Button.css'

function Button({children}) {
    return (
        <span className={'Button'}>{children}</span>
    );
}

export default Button;