import React from 'react';
import {team} from "../config";
import twitter from '../img/twitter.png'

function Team() {
    return (
        <section id="team" className="team">
            <div className="container">
                <h2>Meet the team</h2>
                <div className="wrapp-team">
                    {
                        team.map((item, id) => {
                            return (
                                <div className="wrapp-team__items" key={`Team-${id}`}>
                                    <div className="wrapp-team__items-img">
                                        <img src={item.img} alt=""/>
                                    </div>
                                    <div className="wrapp-team__items-info">
                                        <p className="wrapp-team__items-name">{item.name}</p>
                                        <p className="wrapp-team__items-communication">{item.communication}</p>
                                        <a className="wrapp-team__items-link" href={item.link}><img src={twitter} alt=""/></a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Team;