import React from 'react';
import {advantages, slides} from "../config";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

function Planned() {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <section id="planned" className="planned">
            <div className="container">
                <div className="wrapp-planned">
                    <h2>Mint is planned on 26 August</h2>
                    <div className="wrapp-planned__advantage">
                        {
                            advantages.map((advantage, id) => {
                                return (
                                    <div className="advantage-items" key={`Advantage-${id}`}>
                                        <span className="advantage-items__title">{advantage.title}</span>
                                        <p className="advantage-items__text">{advantage.text}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="wrapp-planned__info">
                        <div className="info-left">
                            <h3>Welcome to the Kepler-896!</h3>
                            <p>This once green exoplanet, with its unique flora & fauna, is now completely covered in
                                sand. However, life continues and adapts even in this hard conditions. Peaceful Kedu are
                                the inhabitants of Kepler-896, and they fight for one big goal - to recover the former
                                greatness of their civilization...</p>
                            <p>...and you are dear space nomad, came here to help them, as each Kedu definitely need
                                your help.</p>
                            <p>7,777 Kedu are programmatically generated from a random combination of more than 300
                                traits. Kedu live on the Ethereum blockchain in form of ERC-721 NFTs. Mint price of each
                                Kedu is 0.04 ETH.</p>

                        </div>
                        <div className="info-right">
                            <Slider {...settings}>
                                {
                                    slides.map((slide, id) => {
                                        return (
                                            <img src={slide} key={`Slide-${id}`} alt=""/>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Planned;