import React from 'react';
import ReactCardFlip from 'react-card-flip';
import card from '../../Images/cardabout1.png';
import './CardFlip.css'
import { useState } from 'react';

export default function CardFlip(props) {

    const [isFlipped, setIsFlipped] = useState(false)

    function handleClick(e) {
        e.preventDefault();
        setIsFlipped(!isFlipped)
    }

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className="card_front">
                <img onClick={handleClick} src={card} alt="" className="card_about" />
            </div>

            <div onClick={handleClick} className="card_back">
                {props.textBack}
            </div>
        </ReactCardFlip>
    )

}