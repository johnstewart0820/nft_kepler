import React, {useCallback, useEffect, useState} from 'react';
import axios from "axios";
import '../styles/Discrod.scss'

interface IInitData {
    inviteCode?: string,
    title?: string,
    introText?: string,
    joinText?: string,
    joinedText?: string,
    width?: number | string,
    miniMode?: string,
    hideIntro?: string,
    targetElement?: string,
}

const defaultData: IInitData = {
    title: "",
    introText: "YOU'VE BEEN INVITED TO JOIN A SERVER",
    joinText: "Join",
    joinedText: "Joined",
    width: 400,
    targetElement: "discordInviteBox",
    inviteCode: '',
    miniMode: '',
    hideIntro: ''
}

function DiscordInvite(props: IInitData) {

    const [initData, setInitData] = useState<IInitData>({...defaultData, ...props});
    const [serverData, setServerData] = useState<{
        serverName?: string,
        serverImg?: string,
        numTotal?: string,
        numOnline?: string,
        isActive: boolean,
        isError: boolean,
    }>({isActive: false, isError: false});
    const [pending, setPending] = useState<boolean>(false);
    const [isJoined, setIsJoined] = useState<boolean>(false);

    useEffect(() => {
        setInitData(prevState => {
            return {
                ...prevState,
                width: props.miniMode ? 'auto' : prevState.width + "px"
            }
        })
    }, [props.miniMode])

    useEffect(() => {
        axios.get(`https://discordapp.com/api/v6/invite/${initData.inviteCode}?with_counts=true`)
            .then((res) => {
                const {data} = res
                if (data) {
                    const t = data.approximate_member_count.toLocaleString("en") + " Members";
                    const o = data.approximate_presence_count.toLocaleString("en") + " Online";
                    const n = data.guild.name;
                    const r = "https://cdn.discordapp.com/icons/" + data.guild.id + "/" + data.guild.icon + ".jpg";
                    setServerData({
                        serverName: n,
                        serverImg: r,
                        numTotal: t,
                        numOnline: o,
                        isActive: true,
                        isError: false
                    })
                }
            })
            .catch((e) => {
                console.log(e.message);
            })
    }, [initData.inviteCode])

    const onLink = useCallback(() => {
        if (serverData.isActive) {
            setPending(true)
            const url = "https://discordapp.com/invite/" + initData.inviteCode;
            window.open(url, "_blank")
            setIsJoined(true)
        }
    }, [initData.inviteCode, serverData.isActive])

    if (!Boolean(initData.inviteCode)) return null

    return (
        // @ts-ignore
        <div id="discordInviteBox" version="1.0">
            <div id="discordInvite" style={{width: initData.width}}>
                <h5 id="introText" className="noselect loadHidden"
                    style={{display: serverData.isActive ? 'block' : 'none'}}>{initData.introText}</h5>
                <div id="discordData">
                    <div id="serverImg" className="discordLink loadHidden"
                         style={{
                             background: `${serverData.serverImg ? `url(${serverData.serverImg})` : ''} rgb(54, 57, 63) repeat scroll 50% 50% / 100% 100% padding-box padding-box`,
                             display: serverData.isActive ? 'block' : 'none'
                         }}/>
                    <div id="discordInfo">
                        <div id="serverNameBox" className="discordLink">
                            <span className="noselect" id="serverName">{serverData.serverName || initData.title}</span>
                        </div>
                        <div id="status" className="loadHidden"
                             style={{display: serverData.isActive ? 'block' : 'none'}}>
                            <div id="statusIndicators" className="noselect">
                                <i id="onlineInd"/><span id="numOnline">{serverData.numOnline || '...Online'}</span>
                                <i id="offlineInd"/><span id="numTotal">{serverData.numTotal || '...Members'}</span>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="discordLink"
                            id={pending ? "callToAction-clicked" : "callToAction"}
                            onClick={onLink}
                    >
                        {
                            isJoined
                                ? <div id="joinedDiscord">{initData.joinedText}
                                    <svg name="Checkmark" width="18" height="18" viewBox="0 0 18 18"
                                         xmlns="http://www.w3.org/2000/svg"
                                         id="discordSVG">
                                        <g fill="none" fillRule="evenodd" id="gDiscord">
                                            <polyline stroke="currentColor" strokeWidth="2" points="3.5 9.5 7 13 15 5"
                                                      id="discordPolyline"/>
                                        </g>
                                    </svg>
                                </div>
                                : <div id="buttonText" className="noselect">{initData.joinText}</div>
                        }
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DiscordInvite;