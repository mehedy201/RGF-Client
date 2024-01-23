import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
// import axios from 'axios'
import './SubmitDataEmploye.css'
import { DatePicker, Spin, TimePicker } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';
import { useContext } from 'react';
import { PRIVET_CONTEXT } from '../Home/Home';
import { useEffect } from 'react';
import axios from 'axios';
const SubmitDataEmploye = () => {
    const navigate = useNavigate();

    const [imagePath, setImagePath] = useState('');
    // const [fileName, setFileName] = useState('');

    const [randomCaptcha, setRandomCaptcha] = useState('');
    const [captchaValue, setCaptchaValue] = useState('');
    const [captchaError, setCaptchaError] = useState('');
    const [loading, setLoading] = useState(false);
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const {setUserName, setPass } = useContext(PRIVET_CONTEXT);


    const characters ='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    useEffect(() => {
        let result = '';
        for ( let i = 0; i < 4; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * 20));
            setRandomCaptcha(result);
        }
    }, [])


    const handleDate = (date, dateString) => {
        setDate(dateString);
      };
    const handleTime = (time, timeString) => {
        setTime(timeString);
    };

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => { 
        const formData = {...data, date, time, imagePath}
        if(captchaValue === randomCaptcha){
            setLoading(true)
            await axios.post('http://s.rgvturf.com/submitData', formData).then(res => {
                console.log(res)
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


    const [imgLoading, setImgLoading] = useState(false)
    const imageUpload = (e) => {
        setImgLoading(true)
        const formData = new FormData();
        formData.append('image', e[0])
        axios.post('http://s.rgvturf.com/emailimage', formData)
            .then(res => {
                if(res.success == 200){
                    console.log('done')
                    setImgLoading(false)
                    setImagePath(`http://s.rgvturf.com/${res.data.linkImage.path}`)
                }
            })
            .catch(er => console.log(er))
    }

    const handleLogOut = () => {
        setUserName('')
        setPass('')
        navigate('/submit-data')
    }
    return (
        <>
        <section id="submit_page">
            <div className="submit_page_hero_section_overly_color">
                <div className='submit_page_hero_section_text'>
                    <h2> Employee Data Portal </h2>
                </div>
            </div>
        </section>
        <section style={{backgroundColor: 'rgb(234,239,228)', position: 'relative'}}>
            <div className="container py-4 py-md-5">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 p-2">
                        <div className="submitDatacontact_form p-2 p-md-4">
                            <h2 className="fw-bold fs-1 text-center py-3">Project Information Details</h2>
                            <form className="contact_form" onSubmit={handleSubmit(onSubmit)}>
                                <input  className="contact_form_input mt-1 mb-2 d-block" type='text' {...register("installerName", { required: true })} placeholder='Installer Name(Contractor/Employee)*'/>
                                {errors.installerName && <span className='text-danger'>required</span>}
                                <input  className="contact_form_input mt-1 mb-2 d-block" type='text' {...register("contactName", { required: true })} placeholder='Contact Name (Who installer spoke to?)*'/>
                                {errors.contactName && <span className='text-danger'>required</span>}
                                <input  className="contact_form_input mt-1 mb-2 d-block" type='text' {...register("customerPhone", { required: true })} placeholder='Customer Phone (Best # to reach about project)*'/>
                                {errors.customerPhone && <span className='text-danger'>required</span>}
                                <input  className="contact_form_input mt-1 mb-2 d-block" type='email' {...register("customerEmail", { required: true })} placeholder='customer Email (Where they want the eestimate)*'/>
                                {errors.customerEmail && <span className='text-danger'>required</span>}
                                <h3 className='pt-3 pb-2 fw-bold'>Turf Instalation Address</h3>
                                <div>
                                    <input  className="contact_form_input mt-1 mb-2 d-block" type='text' {...register("address", { required: true })} placeholder='Address'/>
                                    <input  className="contact_form_input mt-1 mb-2 d-block" type='text' {...register("sqft", { required: true })} placeholder='Total sq. ft. of tur zones (where turf is needed)'/>
                                    {errors.address && <span className='text-danger'>required</span>}
                                    <div className='row'>
                                        <div className="col-md-6">
                                            <div className='me-md-2 my-1'>
                                                <p className='mb-1 fw-bold'>Time Estimate was Completed</p>
                                                <DatePicker size='large'  onChange={handleDate} />
                                                <TimePicker size='large'  onChange={handleTime} defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <p className='my-1 fw-bold'>Photos of job site (not required)</p>
                                            {
                                                imgLoading == true && <div>Image Uploading.. <Spin/></div>
                                            }
                                            <input className='py-2 px-4' type="file" name='image' onChange={e => imageUpload(e.target.files)}/>
                                        </div>
                                    </div>
                                    <p className='my-1 fw-bold'>Additional project notes</p>
                                    <textarea className='contact_notes' name="notes" id="" cols="20" rows="4" {...register("notes", { required: true })}></textarea>
                                    <div className='captcha_div my-2'>
                                        <p style={{letterSpacing: '10px'}} className='bg-white text-black d-inline p-2 fw-bold'>{randomCaptcha}</p><br />
                                        <input className='captcha_input mt-3' type="text" onChange={(e) => setCaptchaValue(e.target.value)}/>
                                        <span className='ms-2 text-danger'>{captchaError}</span> <br />
                                        <small className='mt-2'>*= Required</small>
                                    </div>
                                    {
                                        loading == true && <Spin/>
                                    }
                                </div>
                                <button className='contact_form_submit_button mt-3' type="submit">Submit</button>
                            </form>
                            <button style={{position: 'absolute', top: '-20px', right: '20px'}} className='contact_form_submit_button mt-3' onClick={() => handleLogOut()}>Log Out</button>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </section>
        </>
    );
};

export default SubmitDataEmploye;