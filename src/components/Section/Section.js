import React from 'react';
import Button from "../Button/Button";
import {ReactComponent as ArrowIcon} from "./../../icons/ArrowIcon.svg";
import './Section.css'
import Card from "../Card/Card";

function Section({subtitle, title, children}) {
    return (
        <div className={'Section'}>
            <div className={'Section_Header'}>
                <div>
                    <div className={'Section_Subtitle'}>{subtitle}</div>
                    <div className={'Section_Title'}>{title}</div>
                </div>
                <div>
                    <Button height={30}>
                        Все лекции
                    </Button>

                </div>
            </div>
            <div className={'Section_Content'}>
                {children}
            </div>
        </div>
    );
}

export default Section;