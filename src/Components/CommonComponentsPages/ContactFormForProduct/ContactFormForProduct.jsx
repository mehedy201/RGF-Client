/* eslint-disable no-unused-vars */
// import {useLocation} from 'react';
import { Spin } from 'antd';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import './ContactFormForProduct.css'

const ContactFormForProduct = () => {

    const [randomCaptcha, setRandomCAptcha] = useState('')
    const [captchaValue, setCaptchaValue] = useState('');
    const [captchaError, setCaptchaError] = useState('');
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    // const link = useLocation()
    const characters ='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    useEffect(() => {
        let result = ' ';
        for ( let i = 0; i < 4; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * 20));
        }
        setRandomCAptcha(result);
    }, [])


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async (data) => {  
            const productLink = window.location.href;
            const formData = {...data, productLink}
        if(captchaValue == randomCaptcha){
            setLoading(true)
            await axios.post('https://rgv-server.onrender.com/productContactForm', formData).then(res => {
                if(res.status == 200){
                    setLoading(false)
                    reset();
                    navigate('/thankyou');
                }
            })
        }else{
            setCaptchaError('Please Fell the Captch with Righ Text')
        }



    };
    return (
        <div className='contactFormProduct'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p className='m-0 p-0 text-secondary'>Your Name</p>
                <input  className="contact_form_input mt-1 d-block" type='text' {...register("yourName", { required: true })} />
                {errors.yourName && <span className='text-danger'>Name field is required</span>}
                <p className='mt-3 mb-0 p-0 text-secondary'>Your Email</p>
                <input  className="contact_form_input mt-1 d-block" type='email' {...register("yourEmail", { required: true })} />
                {errors.yourEmail && <span className='text-danger'>Email field is required</span>}
                <p className='mt-3 mb-0 p-0 text-secondary'>Phone</p>
                <input  className="contact_form_input mt-2 d-block" type='text' {...register("phone", { required: true })} />
                {errors.phone && <span className='text-danger'>Phone Required</span>}
                <p className='mt-3 mb-0 p-0 text-secondary'>Amount of sq. ft. needed</p>
                <input  className="contact_form_input mt-2 d-block" type='text' {...register("amount_of_sq_ft_needed", { required: true })} />
                {errors.amount_of_sq_ft_needed && <span className='text-danger'>Amount of sq. ft. needed Required</span>}
                <p className='mt-3 mb-0 p-0 text-secondary'>Shipping address</p>
                <input  className="contact_form_input mt-2 d-block" type='text' {...register("shipping_address", { required: true })} />
                {errors.shipping_address && <span className='text-danger'>Shipping Address Required</span>}
                <div className='captcha_div mt-2'>
                    <p style={{letterSpacing: '10px'}} className='bg-white text-black d-inline p-2 fw-bold'>{randomCaptcha}</p><br />
                    <input className='captcha_input' type="text" onChange={(e) => setCaptchaValue(e.target.value)}/>
                    <span style={{letterSpacing: '10px'}} className='ms-2 text-danger'>{captchaError}</span>
                </div>
                {
                    loading == true && <Spin/>
                }
                <button className='contact_form_submit_button' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactFormForProduct;