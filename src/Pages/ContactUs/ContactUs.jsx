// import React from 'react';
import './ContactUs.css'
import ContactForm from "./ContactForm/ContactForm";

const ContactUs = () => {
    return (
        <>
        <section id="contactUsHeroSection">
                <div className="contactUs_hero_section_overly_color">
                    <div className='contactUs_hero_section_text'>
                        <p>WHERE TO FIND US</p>
                        <h2>Contact Us</h2>
                    </div>
                </div>
            </section>
        {/* Contact Form _______________ */}
        <ContactForm/>
        </>
    );
};

export default ContactUs;