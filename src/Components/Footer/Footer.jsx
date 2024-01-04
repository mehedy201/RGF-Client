// import React from 'react';
import './Footer.css'
import googleImage from '../../assets/FooterLogo/google_review.webp';
import homeAdvisor from '../../assets/FooterLogo/home-advisor-five-star-rating.webp';
import leadCertification from '../../assets/FooterLogo/leed-certification-silver.webp';
import stcMember from '../../assets/FooterLogo/stc-member.webp';
import sslCertification from '../../assets/FooterLogo/ssl-certificate.webp';
import spanish_lang from '../../assets/spanish_lang.webp';

const Footer = () => {
    return (
        <div className='py-5 footer_innerShadow'>
            <div className='container'>
                <div>
                    <p className='text-center'>Copyright ©2023 RGF</p>
                </div>
                <div className='footer_image_style'>

                    <img src={googleImage} alt="Google Review" />
                    <img src={homeAdvisor} alt="home-advisor-five-star-rating" />
                    <img src={leadCertification} alt="leed-certification-silver" />
                    <img src={stcMember} alt="stc-member" />
                    <img src={sslCertification} alt="stc-member" />
                    <img src={spanish_lang} alt="spanish_lang" />
                </div>
            </div>
        </div>
    );
};

export default Footer;