import React from 'react';
import './About.css'
import card from '../../Images/CardVerse.png'
import CardFlip from '../../Components/CardFlip/CardFlip'

export default function About() {

    return (
        <div>
            ABOUT

            <div className="cards_box">

                <div className="about_left_card">
                    <CardFlip textBack="text uhuul" />
                </div>
                <div className="about_mid_card">
                    <CardFlip textBack="text 22222" />
                </div>
                <div className="about_right_card">
                    <CardFlip textBack="text 333333" />
                </div>
            </div>
        </div>
    )
}