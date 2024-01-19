/* eslint-disable no-unused-vars */
// import React from 'react';
import './ContactForm.css'
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { FaLocationArrow } from "@react-icons/all-files/fa/FaLocationArrow";
import { FaMobileAlt } from "@react-icons/all-files/fa/FaMobileAlt";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Spin } from 'antd';
import { useEffect } from 'react';



const ContactForm = () => {

    const [randomCaptcha, setRandomCaptcha] = useState('')
    const [captchaValue, setCaptchaValue] = useState('');
    const [captchaError, setCaptchaError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate('')

    const characters ='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    
    let result = '';
    useEffect(() => {
        let result = '';
        for ( let i = 0; i < 4; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * 20));
            setRandomCaptcha(result);
        }
    }, [])

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        if(captchaValue === randomCaptcha){
            console.log('done')
            setLoading(true)
            await axios.post('https://rgv-server.onrender.com/mainContactForm', data).then(res => {
                setLoading(false)
                if(res.status == 200){
                    setLoading(false)
                    return navigate('/thankyou');
                }else{
                    setLoading(false)
                    return alert('Not Send')
                }

            })
        }else{
            setLoading(false)
            setCaptchaError('Please Fell the Captch with Righ Text')
            return;
        }
    };

    


    return (
        <section className='py-5' style={{backgroundColor: 'rgb(234,239,228)'}} id="contact_form_section">
            <div className="container my-5">
                <div className="row g-2 g-md-4">
                    <div className="col-md-5">
                        <div>
                            <div className='p-4 mb-3 shadow rounded'>
                                <div style={{display: 'inline-block', borderRadius: '50%', border: '1px solid black'}}>
                                    <FaLocationArrow className='fs-1 p-2'/>
                                </div>
                                <h4 className='mt-2'>Location</h4>
                                <p className='text-secondary mb-0'>2330 E Freddy Gonzalez Dr. <br /> Edinburg, TX 78542</p>
                            </div>
                            <div className='p-4 mb-3 shadow rounded'>
                                <div style={{display: 'inline-block', borderRadius: '50%', border: '1px solid black'}}>
                                    <FaMobileAlt className='fs-1 p-2'/>
                                </div>
                                <h4 className='mt-2'>Call Us</h4>
                                <p className='text-secondary mb-0'>956-253-2741</p>
                            </div>
                            <div className='p-4 mb-3 shadow rounded'>
                                <div style={{display: 'inline-block', borderRadius: '50%', border: '1px solid black'}}>
                                    <FaLocationArrow className='fs-1 p-2'/>
                                </div>
                                <h4 className='mt-2'>Write to Us</h4>
                                <p className='text-secondary mb-0'>info@rgvturf.com</p>
                            </div>
                            <div className='p-4 mb-3 shadow rounded'>
                                <div style={{display: 'inline-block', borderRadius: '50%', border: '1px solid black'}}>
                                    <FaLocationArrow className='fs-1 p-2'/>
                                </div>
                                <h4 className='mt-2'>Working Hours</h4>
                                <p className='text-secondary mb-0'>Monday – Friday: 12pm to 5pm <br />Saturday – Sunday: Closed</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="contact_form p-4 rounded">
                            <h3 className='mb-4'>Contact Us</h3>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <p className='m-0 p-0 text-secondary'>Your Name</p>
                                <input  className="contact_form_input mt-1 d-block" type='text' {...register("yourName", { required: true })} />
                                {errors.yourName && <span className='text-danger'>Name field is required</span>}
                                <p className='mt-3 mb-0 p-0 text-secondary'>Your Email</p>
                                <input  className="contact_form_input mt-1 d-block" type='email' {...register("yourEmail", { required: true })} />
                                {errors.yourEmail && <span className='text-danger'>Email field is required</span>}
                                <p className='mt-3 mb-0 p-0 text-secondary'>Subject</p>
                                <input  className="contact_form_input mt-2 d-block" type='text' {...register("subject", { required: true })} />
                                {errors.subject && <span className='text-danger'>Subject field is required</span>}
                                <p className='mt-3 mb-0 p-0 text-secondary'>Your message (optional)</p>
                                <textarea rows="4" className="mt-2 d-block" {...register("message")} />
                                <div className='captcha_div'>
                                    <p style={{letterSpacing: '10px'}} className='bg-white text-black d-inline p-2 fw-bold'>{randomCaptcha}</p><br />
                                    <input className='captcha_input' type="text" onChange={(e) => setCaptchaValue(e.target.value)}/>
                                    <span className='ms-2 text-danger'>{captchaError}</span>
                                </div>
                                {
                                    loading == true && <Spin/>
                                }
                                <button className='contact_form_submit_button' type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;