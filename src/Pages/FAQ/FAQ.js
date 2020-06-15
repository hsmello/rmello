import React from 'react';
import MyPanel from '../../Components/Imports/MyPanel';
import { useTranslation } from 'react-i18next';
import './FAQ.css';

export default function FAQ() {

    const { t, i18n } = useTranslation();

    return (
        <div>
            FAQ
            <div className="faq_questions">

                <MyPanel
                    title={t('FAQ.1.Title')}
                    subtitle={t('FAQ.1.Subtitle')}
                    answer={t('FAQ.1.Answer')}
                />
                <MyPanel
                    title="sssss"
                />
            </div>
        </div>
    )
}