import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
// import axios from 'axios'
import './SubmitDataEmploye.css'
import { DatePicker, TimePicker } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';
import { useContext } from 'react';
import { PRIVET_CONTEXT } from '../Home/Home';
const SubmitDataEmploye = () => {
    const navigate = useNavigate();
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const {setUserName, setPass } = useContext(PRIVET_CONTEXT);

    const handleDate = (date, dateString) => {
        setDate(dateString);
      };

    const handleTime = (time, timeString) => {
        setTime(timeString);
    };

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => { 
        const formData = {...data, date, time}
        console.log(formData)
        // await axios.post('https://rgv-server.onrender.com/submitData', formData).then(res =>  {
        //     if(res.status == 200){
        //         reset(); 
        //         return navigate('/thankyou')
        //     }
        // })
        
    };

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
                    <h2> Project Information </h2>
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
                                    {errors.address && <span className='text-danger'>required</span>}
                                    <div className='d-md-flex'>
                                        <div className='me-md-2 my-1'>
                                            <p className='mb-1'>Select Date</p>
                                            <DatePicker size='large' onChange={handleDate} />
                                        </div>
                                        <div className='my-1'>
                                            <p className='mb-1'>Select Time</p>
                                            <TimePicker size='large' onChange={handleTime} defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} />
                                        </div>
                                    </div>
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