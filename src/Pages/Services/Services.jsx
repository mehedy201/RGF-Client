// import React from 'react';
import './Services.css'
import { FaMobileAlt } from "@react-icons/all-files/fa/FaMobileAlt";
import WhatWeDo from '../../Components/ServicesPageComponents/WhatWeDo/WhatWeDo';

const Services = () => {
    return (
        <>
        <section id="servicesPage">
            <div className="servicesPageHeroBackground">
                <div className="servicesBackgroundOverly">
                    <div className="container">
                        <h1 className='servicesPageTitle'>Synthetic | Modern | Designs</h1>
                    </div>
                </div>
            </div>
            <div className="container py-5 border-bottom">
                <div className="row">
                    <div className="col-md-6">
                        <h4 className='fs-1 fw-bold text-gray'>We don&apos;t settle for average landscapes. Ours look their best 365 days a year! </h4>
                    </div> 
                    <div className="col-md-6 d-flex align-items-center justify-content-end">
                        <div>
                            <h5 className='fw-bold fs-5 text-end'>TXT or CALL for a free estimate</h5>
                            <a style={{textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: '20px', display: 'block' }} className='fs-bold fs-2 text-end' href="callto:9562532741"><FaMobileAlt style={{width: '30px', height: 'auto'}}/> 956-253-2741</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* 3rd Section Components What We Do_________________________________ */}
        <WhatWeDo/>
        {/* 4th Section Components What We Do_________________________________ */}
        </>
    );
};

export default Services;