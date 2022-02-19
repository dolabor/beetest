import React from 'react';
import Section from "../Section/Section";
import'./Content.css'
import Card from "../Card/Card";

function Content(props) {
    return (
        <div className={'Content'}>
            <Section
                subtitle={'БАЗОВЫЙ УРОВЕНЬ'}
                title={'HTML/CSS'}
            >
                <Card
                    imagesrc={'images/maik-jonietz-_yMciiStJyY-unsplash.png'}
                    title={'Структура HTML'}
                    content={'Назначение блоков: head, body'}
                    datestring={'01.02.2022'}
                />
                <Card
                    imagesrc={'images/ferenc-almasi-NzERTNpnaDw-unsplash.png'}
                    title={'Подключение стилей'}
                    content={'Виды подключения стилей. Подключение шрифтов'}
                    datestring={'03.02.2022'}
                />
                <Card
                    imagesrc={'images/pankaj-patel-SXihyA4oEJs-unsplash.png'}
                    title={'CSS'}
                    content={'Базовый синтаксис CSS: селекторы классы'}
                    datestring={'08.02.2022'}
                />
                <Card
                    imagesrc={'images/pankaj-patel-SXihyA4oEJs-unsplash.png'}
                    title={'Наследие и каскад'}
                    content={'Наследие и каскад'}
                    datestring={'10.02.2022'}
                />
            </Section>
            <Section
                subtitle={'ПРОДВИНУТЫЙ УРОВЕНЬ'}
                title={'HTML/CSS'}
            >
                <Card
                    imagesrc={'images/maik-jonietz-_yMciiStJyY-unsplash.png'}
                    title={'HTML-формы'}
                    content={'HTML-формы'}
                    datestring={'01.02.2022'}
                />
                <Card
                    imagesrc={'images/ferenc-almasi-NzERTNpnaDw-unsplash.png'}
                    title={'Flex'}
                    content={'Принципы современной вертски сайт на flex'}
                    datestring={'03.02.2022'}
                />
                <Card
                    imagesrc={'images/pankaj-patel-SXihyA4oEJs-unsplash.png'}
                    title={'Media и viewport'}
                    content={'Адаптивная верстка. Использование media и viewport'}
                    datestring={'08.02.2022'}
                />
                <Card
                    imagesrc={'images/pankaj-patel-SXihyA4oEJs-unsplash.png'}
                    title={'CSS Grid'}
                    content={'CSS Grid'}
                    datestring={'10.02.2022'}
                />
            </Section>
        </div>
    );
}

export default Content;