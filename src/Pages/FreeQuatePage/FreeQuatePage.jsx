// import React from 'react';
import { ScrollRestoration } from 'react-router-dom';
import './FreeQuatePage.css'
import QuateForm from './QuateForm/QuateForm';

const FreeQuatePage = () => {
    return (
        <>
            <ScrollRestoration />
            <section id="contactUsHeroSection">
                <div className="contactUs_hero_section_overly_color">
                    <div className='contactUs_hero_section_text'>
                        <h2>Get Quote</h2>
                    </div>
                </div>
            </section>
            <QuateForm/>
        </>
    );
};

export default FreeQuatePage;