// import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './QuateForm.css'
import { useForm } from 'react-hook-form';
import { Select, Spin } from 'antd';
const QuateForm = () => {


    const [randomCaptcha, setRandomCaptcha] = useState('');
    const [captchaValue, setCaptchaValue] = useState('');
    const [captchaError, setCaptchaError] = useState('');
    const [resCom, setResCom] = useState('');
    const [trufIns, setTurfIns] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate('')

    const characters ='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    useEffect(() => {
        let result = '';
        for ( let i = 0; i < 4; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * 20));
            setRandomCaptcha(result);
        }
    }, [])

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const formData = {...data, resCom, trufIns}
        if(captchaValue === randomCaptcha){
            setCaptchaError('')
            setLoading(true)
            await axios.post('https://s.rgvturf.com/free-quote', formData).then(res => {
                setLoading(false)
                if(res.status == 200){
                    setLoading(false)
                    reset()
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
        <section style={{backgroundColor: 'rgb(234,239,228)'}}>
            <div className="container py-5">
                <div className="row free-quote-section justify-content-center">
                    <div className="col-md-8 contact_form">
                        <h3 className='text-center fw-bold fs-1 pt-4'>Get Quote</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className='p-4'>
                            <p className='m-0 p-0 text-secondary'>Name*</p>
                            <input  className="contact_form_input mt-1 d-block" type='text' {...register("name", { required: true })} />
                            {errors.name && <span className='text-danger'>Name field is required</span>}
                            <p className='mt-3 mb-0 p-0 text-secondary'>Phone*</p>
                            <input  className="contact_form_input mt-1 d-block" type='text' {...register("phone", { required: true })} />
                            {errors.phone && <span className='text-danger'>Phone field is required</span>}
                            <p className='mt-3 mb-0 p-0 text-secondary'>Your Email</p>
                            <input  className="contact_form_input mt-1 d-block" type='email' {...register("email", { required: true })} />
                            {errors.email && <span className='text-danger'>Email field is required</span>}
                            <p className='mt-3 mb-0 p-0 text-secondary'>Please choose Residential or Commercial?</p>
                            <Select
                                placeholder="Select"
                                size='large'
                                style={{
                                    width: '100%',
                                }}
                                onChange={e => setResCom(e)}
                                options={[
                                    {value: 'Residential',label: 'Residential',},
                                    {value: 'Commercial',label: 'Commercial',},
                                ]}
                            />
                            <p className='mt-3 mb-0 p-0 text-secondary'>Do you need the Turf installed?</p>
                            <Select
                                placeholder="Select"
                                size='large'
                                style={{
                                    width: '100%',
                                }}
                                onChange={e => setTurfIns(e)}
                                options={[
                                    {value: 'Yes',label: 'Yes',},
                                    {value: 'No',label: 'No',},
                                ]}
                            />
                            <h4 className='fw-bold mt-3'>Address</h4>
                            <p className='mt-3 mb-0 p-0 text-secondary'>Street*</p>
                            <input  className="contact_form_input mt-2 d-block" type='text' {...register("street", { required: true })} />
                            {errors.street && <span className='text-danger'>Street field is required</span>}
                            <p className='mt-3 mb-0 p-0 text-secondary'>Apartment, unit, suite, or floor #</p>
                            <input  className="contact_form_input mt-2 d-block" type='text' {...register("ausf")} />
                            <p className='mt-3 mb-0 p-0 text-secondary'>City*</p>
                            <input  className="contact_form_input mt-2 d-block" type='text' {...register("city", { required: true })} />
                            {errors.city && <span className='text-danger'>City field is required</span>}
                            <div className="row">
                                <div className="col-md-6">
                                    <div>
                                        <p className='mt-3 mb-0 p-0 text-secondary'>State/Province*</p>
                                        <input  className="contact_form_input mt-2 d-block" type='text' {...register("statProvince", { required: true })} />
                                        {errors.statProvince && <span className='text-danger'>State/Province Requred</span>}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div>
                                        <p className='mt-3 mb-0 p-0 text-secondary'>Postal code*</p>
                                        <input  className="contact_form_input mt-2 d-block" type='text' {...register("postalCode", { required: true })} />
                                        {errors.postalCode && <span className='text-danger'>Postal Code Required</span>}
                                    </div>
                                </div>
                            </div>

                            <div className='captcha_div mt-3'>
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
        </section>
    );
};

export default QuateForm;