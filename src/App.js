import React from 'react';
import AppContentHeader from "./components/AppContentHeader/AppContentHeader";
import {ReactComponent as BeelineIcon} from "./icons/Beeline_2021.svg";
import './App.css';

function App() {
    return (
        <div>
            <div className={'App_Header'}>
                <div className={'App_SideBarHeader'}>
                    <div>
                        <div className={'App_SideBarHeaderYear'}><BeelineIcon/>2022</div>
                        <div className={'App_SideBarHeaderBrand'}>BEEINTERNS</div>
                    </div>
                </div>
                <AppContentHeader/>
            </div>
        </div>
    );
}

export default App;