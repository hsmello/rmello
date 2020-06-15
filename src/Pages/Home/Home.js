import React from 'react';
import './Home.css'
import Cards from '../../Images/cards.png'
import LogoText from '../../Images/logo_text.png'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';
import YoutubeVideo from '../../Components/Youtube/Youtube'

import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SpaIcon from '@material-ui/icons/Spa';

export default function Home() {

    const { t, i18n } = useTranslation();

    return (
        <div className="home_page">
            <img className="cards" src={Cards} alt="" />
            <img className="logo_title" src={LogoText} alt="" />

            <div className="home_social_media">

                <div className="homee_box_title">
                    {t('Home.Box.Title')}
                </div>

                <div className="home_box">

                    <div className="entire_column instagram_ec">
                        <div className="circle instagram_c">
                            <a href="http://www.instagram.com/tarotcomterapia" target="_blank">
                                <div className="icon_c instagram_i">
                                    <InstagramIcon fontSize="inherit" />
                                </div>
                            </a>
                        </div>
                        <h1>{t('Home.Box.Instagram.Title')}</h1>
                        <p>{t('Home.Box.Instagram.Body')}</p>
                    </div>

                    <div className="entire_column reding_ec">
                        <div className="circle reading_c">
                            <Link to="/consultas" >
                                <div className="icon_c reading_i">
                                    <SpaIcon fontSize="inherit" />
                                </div>
                            </ Link>
                        </div>
                        <h1>{t('Home.Box.Reading.Title')}</h1>
                        <p>{t('Home.Box.Reading.Body')}</p>
                    </div>

                    <div className="entire_column youtube_ec">
                        <div className="circle youtube_c">
                            <a href="https://www.youtube.com/channel/UCE1ys4wELu9i-PqJYvffiCQ" target="_blank">
                                <div className="icon_c youtube_i">
                                    <YouTubeIcon fontSize="inherit" />
                                </div>
                            </a>
                        </div>
                        <h1>{t('Home.Box.Youtube.Title')}</h1>
                        <p>{t('Home.Box.Youtube.Body')}</p>
                    </div>

                </div>

            </div>


            <div className="youtube_home">
                <YoutubeVideo
                    src="https://www.youtube.com/embed/iMjkfuowV0E" />
            </div>

        </div>
    )
}