import React from 'react';
import MenuItem from "../MenuItem/MenuItem";
import './SideBar.css'
import MenuSubItem from "../MenuSubItem/MenuSubItem";
import {ReactComponent as SwordIcon} from "../../icons/SwordIcon.svg";
import {ReactComponent as RocketIcon} from "./../../icons/Shape.svg";
import {ReactComponent as PuzzleIcon} from "../../icons/PuzzleIcon.svg";
import {ReactComponent as ChessIcon} from "../../icons/ChessIcon.svg";
import {ReactComponent as CubeIcon} from "../../icons/CubeIcon.svg";
import {ReactComponent as BallIcon} from "../../icons/BallIcon.svg";
import Slider from "../Slider/Slider";

function SideBar(props) {
    return (
        <div className={'SideBar'}>
            <div>
                <MenuItem>ПРОГРАММА</MenuItem>
                <MenuItem>МЕНТОРЫ</MenuItem>
                <MenuItem>ЛЕКЦИЯ</MenuItem>
                <MenuSubItem isSelected>
                    <SwordIcon/>
                    HTML/CSS
                </MenuSubItem>
                <MenuSubItem>
                    <RocketIcon/>
                    GIT
                </MenuSubItem>
                <MenuSubItem>
                    <PuzzleIcon/>
                    JavaScript
                </MenuSubItem>
                <MenuSubItem>
                    <ChessIcon/>
                    React
                </MenuSubItem>
                <MenuSubItem>
                    <CubeIcon/>
                    Angular
                </MenuSubItem>
                <MenuSubItem>
                    <BallIcon/>
                    Data
                </MenuSubItem>

                <MenuItem>ПРАВИЛА ПОСТУПЛЕНИЯ</MenuItem>
                <MenuItem>НОВОСТИ</MenuItem>
                <MenuItem>ОБРАТНАЯ СВЯЗЬ</MenuItem>
            </div>
            <div>
                <MenuItem>
                    <div className={'SideBar_FooterContent'}>
                        Получать рассылку
                        <Slider/>
                    </div>
                </MenuItem>
            </div>
        </div>
    );
}

export default SideBar;