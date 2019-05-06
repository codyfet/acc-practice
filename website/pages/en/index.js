/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

/**
 * Компонент "главный блок", сразу под шапкой.
 */
class HomeSplash extends React.Component {
    render() {
        const { siteConfig, language = '' } = this.props;
        const { baseUrl, docsUrl } = siteConfig;
        const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
        const langPart = `${language ? `${language}/` : ''}`;

        const SplashContainer = (props) => (
            <div className="homeContainer">
                <div className="homeSplashFade">
                    <div className="wrapper homeWrapper">{props.children}</div>
                </div>
            </div>
        );

        /**
         * Блок с логотипом под шапкой.
         */
        const MainBlock = (props) => {
            return (
                <div className="main-block-wrapper">
                    <div className="main-block-text">
                        <p>Практика в тверском офисе компании <span className="acc-name">Accenture</span></p>
                    </div>
                    <div className="main-block-logo">
                        <img alt="Accenture Logo" className="acc-logo" src={`${baseUrl}img/Accenture-research-medium-marquee.png`}></img>
                    </div>
                </div>

                // <div class="index-hero">
                //     <div class="index-hero-inner">
                //         <h1 class="index-hero-project-tagline"> <span class="index-hero-project-keywords">Open Source</span> documentation websites.</h1>
                //     </div>
                // </div>
            );
        }

        return (
            <SplashContainer>
                <MainBlock />
            </SplashContainer>
        );
    }
}

class Index extends React.Component {
    render() {
        const { config: siteConfig, language = '' } = this.props;
        const { baseUrl } = siteConfig;

        const Block = props => (
            <Container
                padding={['bottom', 'top']}
                id={props.id}
                background={props.background}>
                <GridBlock
                    align="center"
                    contents={props.children}
                    layout={props.layout}
                />
            </Container>
        );

        /**
         * Презентация о компании.
         */
        const DemoBlock = () => (
            <Block background="" >
                {[
                    {
                        content: 'Вы узнаете всё, что хотели знать о компании и о том каково это работать в тверском офисе Accenture',
                        image: `${baseUrl}img/undraw_business_plan_5i9d.svg`,
                        imageAlign: 'left',
                        title: 'Презентация о компании',
                    },
                ]}
            </Block>
        );

        /**
         * Программирование на языке JavaScript.
         */
        const JavaScriptBlock = () => (
            <Block background="light">
                {[
                    {
                        content:
                            'Вы изучите основы программирования и сможете применить полученные знания для решения задач, представленных в игровой форме.',
                        image: `${baseUrl}img/undraw_programming_2svr.svg`,
                        imageAlign: 'right',
                        title: 'Программирование на языке JavaScript',
                    },
                ]}
            </Block>
        );

        /**
         * Ещё какой то блок от Лёши.
         */
        const AnotherOneBlock = () => (
            <Block background="">
                {[
                    {
                        content:
                            'Вы изучите ещё какие то вещи.',
                        image: `${baseUrl}img/undraw_programming_2svr.svg`,
                        imageAlign: 'left',
                        title: 'Ещё какой то блок от Лёши',
                    },
                ]}
            </Block>
        );

        /**
         * Бизнес-игра.
         */
        const BusinessGameBlock = () => (
            <Block background="dark">
                {[
                    {
                        content:
                            'Вам предстоит примерить на себя роль аналитика и в игровой форме спроектировать прототип приложения',
                        image: `${baseUrl}img/undraw_business_analytics_l92d.svg`,
                        imageAlign: 'right',
                        title: 'Бизнес-игра',
                    },
                ]}
            </Block>
        );

        return (
            <div>
                <HomeSplash siteConfig={siteConfig} language={language} />
                <div className="mainContainer">
                    <DemoBlock />
                    <JavaScriptBlock />
                    <AnotherOneBlock />
                    <BusinessGameBlock />
                </div>
            </div>
        );
    }
}

module.exports = Index;
