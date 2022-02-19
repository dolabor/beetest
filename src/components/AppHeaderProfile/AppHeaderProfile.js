import React from 'react';
import './AppHeaderProfile.css'
import {ReactComponent as OvalIcon} from "./../../icons/Oval.svg";
import Button from "../Button/Button";

function AppHeaderProfile() {
    return (
        <div className={'AppHeaderProfile'}>
            <div className={'AppHeaderProfile_Avatar'}><img alt={'Sorry'} src={'images/mulyadi-kL4coQHVj_A-unsplash.png'}/> </div>
            <div>
                <div>Вася Пупкин</div>
                <div className={'AppHeaderProfile_Status'}> <OvalIcon/> <b>Online</b> </div>
            </div>
            <div><Button>PRO</Button></div>
        </div>
    );
}

export default AppHeaderProfile;