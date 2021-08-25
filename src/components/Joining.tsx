import React from 'react';
import joining from '../img/joining.png';
import DiscordInvite from "./DiscordInvite";
function Joining() {
    return (
        <div className="container">
            <div className="joining-img">
                <img src={joining} alt=""/>
            </div>
            <div className="wrapp-joining">
                <div className="wrapp-joining__title">
                    <h3>Stay updated by joining our Discord</h3>
                </div>

                <div className="wrapp-joining__link">
                    <div className="w-layout-grid grid-2">
                        <div>
                            <div className="html-embed w-embed w-script">
                            </div>
                            <div className="w-embed">
                                <div style={{maxWidth: "100%"}}>
                                    <DiscordInvite inviteCode="xFsvN4Y5SF" title="Ethlings"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Joining;