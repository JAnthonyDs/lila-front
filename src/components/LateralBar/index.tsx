import React from "react";

import './Style.scss'
import facebook from './assets/facebook.svg'
import twitter from './assets/twitter.svg'
import instagram from './assets/instagram.svg'
import youtube from './assets/youtube.svg'
import message from './assets/message.svg'

const LateralBar: React.FC = () =>{
    return(
        <div className="main">
            <ul>
                <li>
                    <img src={facebook}></img>
                </li>
                <li>
                    <img src={twitter}></img>
                </li>
                <li>
                    <img src={instagram}></img>
                </li>
                <li>
                    <img src={youtube}></img>
                </li>
                <div>
                    <li>
                        <img src={message}></img>
                    </li>
                </div>
            </ul>
        </div>
    );
}

export default LateralBar;