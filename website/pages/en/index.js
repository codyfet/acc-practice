/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
class Index extends React.Component {
    render() {
        const { config: siteConfig, language = '' } = this.props;
        const { baseUrl, docsUrl } = siteConfig;

        return (
            <div>
                <div className="hero-image-title">
                    <div className="home-text">
                        Основы программирования на языке JavaScript в тверском офисе <span className="acc-name">Accenture</span>
                    </div>
                    <div className="link-wrapper">
                        <a className="link" href={`${docsUrl}/Переменные`}>перейти к материалам</a>
                    </div>
                    <img
                        className="adaptive-img lazy logo-acc "
                        alt="Accenture logo"
                        src={`${baseUrl}img/Acc_GT_Dimensional_Purple_RGB_REV.svg`}
                        data-src="//www.accenture.com/t00010101T000000Z__w__/ru-ru/_acnmedia/Accenture/Conversion-Assets/MainPages/Images/Global_26/Accenture-Electric-Purple-Logo-marquee.png"
                    />
                </div>
            </div>
        );
    }
}

module.exports = Index;
