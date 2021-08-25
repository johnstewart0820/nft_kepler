import React, {useCallback, useEffect, useMemo, useState} from 'react';
import logo from '../img/logo.png'
import {menu, socials} from "../config";
import {scrollToElement} from "../util";
function Header() {

    const [showMenu, setShowMenu] = useState(false);

    const bodyRef = useMemo(() => {
        return document.querySelector('body');
    }, [])

    useEffect(() => {
        if (bodyRef) {
            bodyRef.classList[showMenu ? 'add' : 'remove']('look-menu')
        }
    }, [bodyRef, showMenu])

    const onLinkHandler = useCallback((event: any, href: string) => {
        setShowMenu(false);
        scrollToElement(event, href);
    }, [])

    return (
        <header className="header">
            <div className="wrapp-header">
                <div className="wrapp-header__left">
                    <div className="wrapp-header__logo">
                        <a href="/"><img src={logo} alt="logo"/></a>
                        <p className="wrapp-header__logo-description">Kepler`s Civil Society</p>
                    </div>
                    <div className="wrapp-header__soc">
                        <ul>
                            {
                                socials.map((social, id) => {
                                    return (
                                        <li key={`Social-${id}`}>
                                            <a rel="noreferrer" target="_blank" href={social.href}>
                                                <img src={social.img} alt=""/>
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="wrapp-header__right">
                    <div className={`header-burger ${showMenu && 'active'}`} onClick={() => setShowMenu(!showMenu)}>
                        <span/>
                        <span/>
                        <span/>
                    </div>
                    <nav className={`wrapp-header__menu ${showMenu && 'active'}`}>
                        <ul>
                            {
                                menu.map((item, id) => {
                                    return (
                                        <li key={`Menu-${id}`}>
                                            <a href={'/'} onClick={(e) => onLinkHandler(e, item.href)}>{item.name}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;