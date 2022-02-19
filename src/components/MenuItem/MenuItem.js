import React from 'react';
import './MenuItem.css'
import {ReactComponent as ArrowIcon} from "./../../icons/ArrowIcon.svg";

function MenuItem({children, isCollapsible}) {
    return (
        <div className={'MenuItem'}>
            {children}
            {isCollapsible ? <ArrowIcon className={'MenuItem_CollapseIcon'}/>:null}
        </div>
    );
}

export default MenuItem;