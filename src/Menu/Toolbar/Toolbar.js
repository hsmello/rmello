import React, { useState } from 'react';
import './Toolbar.css'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import MenuIcon from '@material-ui/icons/Menu';
import Language from '../../Components/Language/Language'
import Logo from '../../Images/logo_clean.png'

function Toolbar(props) {

    const { t, i18n } = useTranslation();

    return (
        <header className="toolbar_header">

            <div className="sideDrawerButton">
                <button onClick={props.onClick}>
                    <MenuIcon fontSize="large" />
                </button>
            </div>

            <div className="toolbar_logo">
                <Link to="/"><img className="logo" src={Logo} alt="" /></Link>
            </div>

            <div className="toolbar_options">
                <nav className="nav_area">
                    <Link to="/sobre" >{t('ResponsiveMenu.Toolbar.About')}</Link>
                    <Link to="/contato" >{t('ResponsiveMenu.Toolbar.Contact')}</Link>
                    <Link to="/consultas" >{t('ResponsiveMenu.Toolbar.Reading')}</Link>
                    <Link to="/faq" >{t('ResponsiveMenu.Toolbar.FAQ')}</Link>
                </nav>

                <Language />
            </div>
        </header >
    );
};

export default Toolbar;
