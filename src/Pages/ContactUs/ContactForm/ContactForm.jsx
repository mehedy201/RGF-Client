// import React from 'react';
import './ContactForm.css'
import { useForm } from "react-hook-form";
import { useState } from 'react';

const ContactForm = () => {

    const [captchaValue, setCaptchaValue] = useState('');
    const [captchaError, setCaptchaError] = useState('')


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        if(captchaValue == 'DQ33'){
            console.log(data)
            setCaptchaError('')
            reset();
        }else{
            setCaptchaError('Please Fell the Captch with Righ Text')
        }
    };

    


    return (
        <section className='py-5' style={{backgroundColor: 'rgb(234,239,228)'}} id="contact_form_section">
            <div className="container my-5">
                <div className="row g-2">
                    <div className="col-md-6">
                        <div>

                        </div>
                    </div>
                    <div className="col-md-6">
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
                                    <p className='bg-white text-black d-inline p-2 fw-bold'>D Q 3 3</p><br />
                                    <input className='captcha_input' type="text" onChange={(e) => setCaptchaValue(e.target.value)}/>
                                    <span className='ms-2 text-danger'>{captchaError}</span>
                                </div>
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