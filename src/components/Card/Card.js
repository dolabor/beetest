import React from 'react';
import Button from "../Button/Button";
import './Card.css';

function Card({title = '', content = '', imagesrc, datestring}) {
    return (
        <div className={'Card'}>
            <div className={'Card_Header'}>
                <div className={'Card_HeaderImage'}>
                    <img alt={'Sorry'} src={imagesrc}/>
                    <div className={'Card_Button'}>
                        <Button>
                            Лекция
                        </Button>
                    </div>
                </div>
                <div className={'Card_Title'}>
                    {title}
                </div>
                <div className={'Card_Content'}>
                    {content}
                </div>
            </div>
            <div className={'Card_Footer'}>
                {datestring}
                <Button height={30}>
                    Смотреть
                </Button>
            </div>
        </div>
    );
}

export default Card;