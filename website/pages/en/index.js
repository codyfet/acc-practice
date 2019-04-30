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

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        {/* <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} /> */}
        {/* <img
            className="adaptive-img lazy  "
            data-imagexs="//www.accenture.com/t00010101T000000Z__w__/ru-ru/_acnmedia/Accenture/Conversion-Assets/MainPages/Images/Global_26/Accenture-Electric-Purple-Logo-marquee.png"
            data-imagesm="//www.accenture.com/t00010101T000000Z__w__/ru-ru/_acnmedia/Accenture/Conversion-Assets/MainPages/Images/Global_26/Accenture-Electric-Purple-Logo-marquee.png"
            data-imagelg="//www.accenture.com/t00010101T000000Z__w__/ru-ru/_acnmedia/Accenture/Conversion-Assets/MainPages/Images/Global_26/Accenture-Electric-Purple-Logo-marquee.png"
            alt=""
            src="//www.accenture.com/t00010101T000000Z__w__/ru-ru/_acnmedia/Accenture/Conversion-Assets/MainPages/Images/Global_26/Accenture-Electric-Purple-Logo-marquee.png"
            style={{display: "block"}}
            data-src="//www.accenture.com/t00010101T000000Z__w__/ru-ru/_acnmedia/Accenture/Conversion-Assets/MainPages/Images/Global_26/Accenture-Electric-Purple-Logo-marquee.png">
          </img> */}
        {/* <Logo img_src={"//www.accenture.com/t00010101T000000Z__w__/ru-ru/_acnmedia/Accenture/Conversion-Assets/MainPages/Images/Global_26/Accenture-Electric-Purple-Logo-marquee.png"} /> */}
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          {/* <PromoSection>
            <Button href="#try">Try It Out</Button>
            <Button href={docUrl('doc1.html')}>Example Link</Button>
            <Button href={docUrl('doc2.html')}>Example Link 2</Button>
          </PromoSection> */}
          <div>13.05.2019 - 13.06.2019</div>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

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

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        {/* <h2>Практика включает</h2> */}
        {/* <MarkdownBlock>Практика включает</MarkdownBlock> */}
      </div>
    );

    const DemoBlock = () => (
      <Block  background="light" id="try">
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

    const JavaScriptBlock = () => (
      <Block>
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

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'Вам предстоит примерить на себя роль аналитика и в игровой форме спроектировать прототип приложения',
            image: `${baseUrl}img/undraw_business_analytics_l92d.svg`,
            imageAlign: 'right',
            title: 'Поучаствуете в бизнес-игре',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
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

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'This is the content of my feature',
            image: `${baseUrl}img/undraw_react.svg`,
            imageAlign: 'top',
            title: 'Feature One',
          },
          {
            content: 'The content of my second feature',
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'top',
            title: 'Feature Two',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          {/* <Features /> */}
          <FeatureCallout />
          <DemoBlock />
          <JavaScriptBlock />
          <Description />
          {/* <Showcase /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
