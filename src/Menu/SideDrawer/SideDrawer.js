import React from 'react';
import './SideDrawer.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import Language from '../../Components/Language/Language'

export default function SideDrawer(props) {

    const { t, i18n } = useTranslation();

    let drawerClasses = 'side_Drawer';
    if (props.show) {
        drawerClasses = 'side_Drawer open';
    }

    return (
        <nav className={drawerClasses} >
            <h2 className="menu_title">MENU</h2>
            <ul>
                <Link to="/sobre" >{t('ResponsiveMenu.Toolbar.About')}</Link>
                <Link to="/contato" >{t('ResponsiveMenu.Toolbar.Contact')}</Link>
                <Link to="/consultas" >{t('ResponsiveMenu.Toolbar.Reading')}</Link>
                <Link to="/faq" >{t('ResponsiveMenu.Toolbar.FAQ')}</Link>
                <Language />
            </ul>
        </nav>
    );
};