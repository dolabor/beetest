import React from 'react';
import './AppHeaderRightPart.css';
import {ReactComponent as FlashIcon} from './../../icons/icon-1.svg'

function AppHeaderRightPart() {
    return (
        <div className={'AppHeaderRightPart'}>
            <div>15 готовых дз</div>
            <div>18 лекций</div>
            <div className={'AppHeaderRightPart_1200Hours'}>
                <span className={'AppHeaderRightPart_Icon'}> <FlashIcon/> </span>
                <span>
                    <span className={'AppHeaderRightPart_Value'}>1200</span>
                    <span> часов</span>
                </span>
            </div>
        </div>
    );
}

export default AppHeaderRightPart;