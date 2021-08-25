import React from 'react';
import bg_main from '../img/bg-main.png'
import {scrollToElement} from "../util";

function Main() {
    return (
        <section id="main" className="main">
            <div className="main-img">
                <img src={bg_main} alt=""/>
            </div>
            <div className="container">
                <div className="wrapp-main">
                    <div className="wrapp-main__top">
                        <h1 className="wrapp-main__title">Kepler`s Civil Society</h1>
                        <p className="wrapp-main__description">This once green exoplanet, with its unique flora & fauna,
                            is now completely
                            covered in sand. However, life continues and adapts even in this hard conditions. </p>
                        <div className="wrapp-main__btn">
                            <a href={'/'} className="wrapp-main__btn-one" onClick={(e) => scrollToElement(e, '#planned')} >Learn More</a>
                            <a href={'/'} className="wrapp-main__btn-two" onClick={(e) => scrollToElement(e,'#roadmap')} >Roadmap</a>
                        </div>
                    </div>
                    <div className="wrapp-main__bot">
                        <a className="wrapp-main__transition" onClick={(e) => scrollToElement(e, '#planned')} href="/">
                            <div/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Main;