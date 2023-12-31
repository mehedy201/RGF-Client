// import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'

const LandingPage = () => {
    return (
        <div className="landing_page">
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
              <div>
                  {/* <h1>Mehedi</h1> */}
              </div>
            </div>
        </div>
    );
};

export default LandingPage;