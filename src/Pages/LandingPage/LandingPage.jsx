// import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'
import { FaPinterestP } from "@react-icons/all-files/fa/FaPinterestP";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import Experience from '../../Components/LandingPageComponents/Experience/Experience';
import KeyBenefits from '../../Components/LandingPageComponents/KeyBenefits/KeyBenefits';

const LandingPage = () => {
    return (
        <>
        <section className="landing_page">
            <div className="container">
              {/* Hero Section_________________________ */}
              {/* Hero Text  */}
              <h1 className='text-center pt-5 pb-2 landing_page_hero_text'>Residential & Commercial <br/> Synthetic Landscapes </h1>
              {/* Hero Button  */}
              <div className="landingPageButtonPrenentDiv">
                <div className='landingPageButtonDiv'>
                    <Link to={'/'} className="heroBtnStyle">Shop Turf</Link>
                    <Link to={'/'} className="heroBtnStyle">Shop Plants</Link>
                    <Link to={'/'} className="heroBtnStyle">Free Quote</Link>
                </div>
              </div>
              {/* Hero Section bottom part ___________ */}
              <div className='row py-md-5 mt-md-5 gx-4'>
                  <div className="col-md-4"><div className='border-top border-2 border-white p-2'><p className='text-white fs-4'><span className='fw-bold'>Phone:</span> <span>(956) 253-2741</span></p></div></div>
                  <div className="col-md-4"><div className='border-top border-2 border-white p-2'><p className='text-white fs-4'><span className='fw-bold'>Mail:</span> <span>info@rgvturf.com</span></p></div></div>
                  <div className="col-md-4">
                      <div className='border-top border-2 border-white p-2'>
                          <p className='text-white fs-4 fw-bold'>Soical Link: 
                          <span>
                              <a className='text-white' target='_blank' rel='noreferrer' href="https://www.pinterest.com/rgvturf/"><FaPinterestP className='m-2' /></a>
                              <a className='text-white' target='_blank' rel='noreferrer' href="https://www.instagram.com/rgvturf/"><FaInstagram className='m-2' /></a>
                              <a className='text-white' target='_blank' rel='noreferrer' href="https://twitter.com/rgvturf"><FaTwitter className='m-2' /></a>
                              <a className='text-white' target='_blank' rel='noreferrer' href="https://www.facebook.com/rgvturf"><FaFacebookF className='m-2' /></a>
                          </span>
                          </p>
                      </div>
                    </div>
              </div>
            </div>
        </section>
        {/* Experience Section _________________________________________________________________ */}
        <section className='container'>
            <Experience/>
        </section>
        {/* Key Benifits Section ________________________________________________________________ */}
        <KeyBenefits/>



        </>
    );
};

export default LandingPage;