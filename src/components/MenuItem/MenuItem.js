import React from 'react';
import './MenuItem.css'

function MenuItem({children}) {
    return (
        <div className={'MenuItem'}>{children}</div>
    );
}

export default MenuItem;