import React from 'react'
import style from './ShareButton.module.scss'
import { useState } from 'react'
import iconShare from '../assets/icon-share.svg'
import iconFacebook from '../assets/icon-facebook.svg'
import iconPinterest from '../assets/icon-pinterest.svg'
import iconTwitter from '../assets/icon-twitter.svg'

export default function ShareButton() {
    const [showShare, setShowShare] = useState(false)
    const handleClick = () => {
        setShowShare(!showShare);
    }

    return (
        <div onClick={() => handleClick()} className={style.shareButton}>
            <img src={iconShare} alt="" />

            {showShare ?
                <div className={style.shareActive}>
                    <div className={style.triangle}></div>

                    <div className={style.socialMedias}>
                        <p>SHARE</p>
                        <img src={iconFacebook} alt="" />
                        <img src={iconTwitter} alt="" />
                        <img src={iconPinterest} alt="" />
                    </div>
                </div> : ' '}
        </div>
    )
}