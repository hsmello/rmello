import React from 'react';
import './About.css'
import { useTranslation } from 'react-i18next';
import AboutPic from '../../Images/CardVerse.png'
import CardFlip from '../../Components/CardFlip/CardFlip'

export default function About() {

    const { t, i18n } = useTranslation();

    return (
        <div>
            <div className="about_title">
                {t('About.Title')}
            </div>

            <div className="about_first_block">

                <div className="about_pic_div">
                    <div className="block1" />

                    {/* <img src={AboutPic} alt="" className="about_pic" /> */}

                    <div className="block2" />

                </div>

                <div className="about_text">
                    {t('About.Text')}
                </div>

            </div>

            <div className="cards_box">

                <div className="about_left_card">
                    <CardFlip textBack={t('About.Card1')} />
                </div>
                <div className="about_mid_card">
                    <CardFlip textBack={t('About.Card2')} />
                </div>
                <div className="about_right_card">
                    <CardFlip textBack={t('About.Card3')} />
                </div>
            </div>
        </div>
    )
}