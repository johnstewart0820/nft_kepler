import React from 'react';
import logo from '../img/logo.png'
import {menu, socials} from "../config";
import {scrollToElement} from "../util";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="wrapp-footer">
                    <div className="wrapp-footer__logo">
                        <a href="/"><img src={logo} alt="logo"/></a>
                        <p className="wrapp-header__logo-description">Kepler`s Civil Society</p>
                    </div>
                    <nav className="wrapp-footer__menu">
                        <ul>
                            {
                                menu.map((item, id) => {
                                    return (
                                        <li key={`MenuFooter-${id}`}>
                                            <a onClick={(e) => scrollToElement(e, item.href)} href={'/'}>{item.name}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                    <div className="wrapp-footer__soc">
                        <ul>
                            {
                                socials.map((social, id) => {
                                    return (
                                        <li key={`SocialFooter-${id}`}>
                                            <a rel="noreferrer" target="_blank" href={social.href}>
                                                <img src={social.img} alt=""/>
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <p>© 2021 Kepler’s</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;