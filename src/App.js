import React from 'react';
import AppContentHeader from "./components/AppContentHeader/AppContentHeader";
import {ReactComponent as BeelineIcon} from "./icons/Beeline_2021.svg";
import './App.css';
import SideBar from "./components/SideBar/SideBar";
import Content from "./components/Content/Content";
import Card from "./components/Card/Card";

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
            <div className={'App_Content'}>
                <Content/>
            </div>
            <SideBar/>
        </div>
    );
}

export default App;