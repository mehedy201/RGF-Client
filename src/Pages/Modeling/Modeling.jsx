// import React from 'react';
import './Modeling.css';
import cardImage from '../../assets/AboutUsImages/2023-10-21-13.41.50-1-1024x720.webp';
import newImage from '../../assets/AboutUsImages/interior-courtyard-turf-design.webp';
import image3 from '../../assets/AboutUsImages/2023-10-21-13.45.12-1024x720.webp';
import image4 from '../../assets/AboutUsImages/southwestern-themed-plaza-with-artificial-grass-4-1024x720.webp';
import image5 from '../../assets/AboutUsImages/turf-indoors-1280x720.webp';
import image6 from '../../assets/ContactUsImage/hero_contact.jpg';

import ImageCard from './ImageCard/ImageCard';

const Modeling = () => {
    const galleryImages =[
        {img: cardImage},
        {img: newImage},
        {img: image3},
        {img: image4},
        {img: image5},
        {img: image6},
    ]
    return (
        <>
        <section id="modelingHeroSection">
            <div className="modeling_hero_section_overly_color">
                <div className='modeling_hero_section_text'>
                    <p>Ultra-Realistic Renderings of Your Property!</p>
                    <h2>3D Modeling & Design Services</h2>
                </div>
            </div>
        </section>
        <section className='py-5'>
            <div className="container">
                <div className="row g-3">
                        <ImageCard galleryImages={galleryImages}/>
                </div>
            </div>
        </section>
        </>
    );
};

export default Modeling;