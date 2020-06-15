import React from 'react';
import './Footer.css'
import { useTranslation } from 'react-i18next';

import Meditation from '../Images/meditation.png'
import CardsIcon from '../Images/cardsicon.png'

import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

export default function Footer() {

    const { t, i18n } = useTranslation();

    return (
        <div className="footer">

            <div className="footer_top">
                <div className="social_media">
                    <div className="footer_sm_title">

                        {t('Footer.Social.Title')}
                    </div>
                    <div className="footer_sm_body">
                        <a
                            className="instagram social"
                            href="http://www.instagram.com/tarotcomterapia"
                            target="_blank"
                        >
                            <InstagramIcon fontSize="large" />
                            <span>{t('Footer.Social.Instagram')}</span>
                        </a>
                        <a
                            className="whatsapp social"
                            href="https://api.whatsapp.com/send?phone=351934252202&text=&source=&data=&app_absent="
                            target="_blank"
                        >
                            <WhatsAppIcon fontSize="large" />
                            <span>{t('Footer.Social.Whatsapp')}</span>
                        </a>
                        <a
                            className="youtube social"
                            href="https://www.youtube.com/channel/UCE1ys4wELu9i-PqJYvffiCQ"
                            target="_blank"
                        >
                            <YouTubeIcon fontSize="large" />
                            <span>{t('Footer.Social.Youtube')}</span>
                        </a>
                        <a
                            className="email social"
                            href="https://www.youtube.com/channel/UCE1ys4wELu9i-PqJYvffiCQ"
                            target="_blank"
                        >
                            <AlternateEmailIcon fontSize="large" />
                            <span>{t('Footer.Social.Email')}</span>
                        </a>
                    </div>
                </div>
                <div className="footer_message">

                    <img className="cards_icon" src={CardsIcon} alt="" />
                    <div className="footer_message_text">
                        <p>{t('Footer.Message.First')} </p>
                        <p>{t('Footer.Message.Second')}</p> 
                        <p>{t('Footer.Message.Third')}</p>
                    </div>
                    <img src={Meditation} alt="" className="meditation_icon"/>
                </div>
            </div>

            <div className="footer_bottom">
                {t('Footer.Copyrights')}
            </div>

        </div>
    )
}