import React, { useState } from 'react';
import BrFlag from '../../Images/br_flag.jpg'
import UKFlag from '../../Images/uk_flag.jpg'
import LanguageIcon from '@material-ui/icons/Language';
import { useTranslation } from 'react-i18next'
import './Language.css'

export default function Language() {

    const { t, i18n } = useTranslation();
    const [chosenLanguage, setChosenLanguage] = useState('Language')

    function handleClick(language) {
        i18n.changeLanguage(language);
        if (language === 'pt') {
            setChosenLanguage('Portugês')
        } else {
            setChosenLanguage('English')
        }
    }

    return (
        <div className="language_div">
            
            <div className="language_title">
                <LanguageIcon fontSize="large" />
                <p>{chosenLanguage}</p>
            </div>

            <div className="language_options">
                <button onClick={() => handleClick('pt')}>
                    <img className="language_flag" src={BrFlag} alt="" />
                    <p>Portugês</p>
                </button>
                <button onClick={() => handleClick('en')}>
                    <img className="language_flag" src={UKFlag} alt="" />
                    <p>English</p>
                </button>
            </div>
        
        </div>
    )
}