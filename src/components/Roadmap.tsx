import React from 'react';
import present from '../img/1Present.png'
import technology from '../img/2Technology.png'
import secret from '../img/3Secret.png'

function Roadmap() {
    return (
        <section id="roadmap" className="roadmap">
            <div className="container">
                <h2>Roadmap</h2>
                <div className="wrapp-roadmap">
                    <div className="wrapp-roadmap__item one-items">
                        <div className="wrapp-roadmap__item-img">
                            <img src={present} alt=""/>
                        </div>
                        <div className="wrapp-roadmap__item-info">
                            <p className="item-info__title">Initial phase</p>
                            <ul className="item-info__list">
                                <li>We will donate <span>2%</span> of the fund to exoplanet research center <span>[suggestions opened at Discord]</span>
                                </li>
                                <li><span>10 Kedu</span> life-size figures randomly will be hand out to all Kedu
                                    holders
                                </li>
                                <li><span>5 amazing PS5</span> will be provided</li>
                                <li><span>The Emperor Gaming Chair</span> will also be hand out</li>
                                <li>In addition, we will perform
                                    some <span>merch [jerseys, hoodies, mouse pads, etc.]</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="wrapp-roadmap__item two-items">
                        <div className="wrapp-roadmap__item-img">
                            <img src={technology} alt=""/>
                        </div>
                        <div className="wrapp-roadmap__item-info">
                            <p className="item-info__title">Main phase</p>
                            <ul className="item-info__list">
                                <li>Kepler DAO <span>in order to improve our community and entire NFT space we launching the DAO with long-term goals</span>
                                </li>
                                <li>Partnerships <span>we look forward to future strategical partnerships with several projects/startups</span>
                                </li>
                                <li>Liquidity Pool <span>pandora's box will be opened</span></li>
                                <li>Buyback program <span>we will activate this program via Genie.xyz</span></li>
                                <li>Dune Analytics page <span>we love on-chain data and charts</span></li>
                                <li>Bank of Kepler Citizens <span>We will be taking 3% royalties of each resale on Opensea. 2.5% reverts to the community wallet once a month and 0.5% to the team</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="wrapp-roadmap__item three-items">
                        <div className="wrapp-roadmap__item-img">
                            <img src={secret} alt=""/>
                        </div>
                        <div className="wrapp-roadmap__item-info">
                            <p className="item-info__title">Renaissance phase (*if all Kedu is minted)</p>
                            <ul className="item-info__list">
                                <li>NFT comics based on Kepler - <span>896 life</span>. Free drop for all Kedu holders
                                </li>
                                <li>Additional <span>3D collection</span>. Free drop for all Kedu holders</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Roadmap;