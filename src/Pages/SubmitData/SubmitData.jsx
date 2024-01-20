/* eslint-disable no-unused-vars */
// import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios'
import './SubmitData.css'
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PRIVET_CONTEXT } from "../Home/Home";

const SubmitData = () => {

    const {setUserName, setPass } = useContext(PRIVET_CONTEXT);

    const navigate = useNavigate();

    const user = 'employees';
    const pass = 'rgvturf@2022'
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async (data) => { 
        if(user == data.NameEmail && pass == data.Password){
            setUserName(data.NameEmail);
            setPass(data.Password)
            navigate('/submit-data-employe')
        }else{
            alert('Please fill Right Log in Information')
        }
    };

    return (
        <>
        <section id="submit_page">
            <div className="submit_page_hero_section_overly_color">
                <div className='submit_page_hero_section_text'>
                    <h2> Project Estimation </h2>
                </div>
            </div>
        </section>
        <section style={{backgroundColor: 'rgb(234,239,228)'}}>
            <div className="container py-4 py-md-5">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 p-2">
                        <div className="submitDatacontact_form p-2 p-md-4">
                            <h2 className="fw-bold fs-1 text-center py-3">Login</h2>
                            <form className="contact_form" onSubmit={handleSubmit(onSubmit)}>
                                <p className='m-0 p-0'>Username or Email Address </p>
                                <input  className="contact_form_input mt-1 mb-2 d-block" type='text' {...register("NameEmail", { required: true })} />
                                {errors.NameEmail && <span className='text-danger'>Name/Email required</span>}
                                <p className='m-0 p-0'> Password</p>
                                <input  className="contact_form_input mt-1 d-block" type='password' {...register("Password", { required: true })} />
                                {errors.Password && <span className='text-danger'> Password Required </span>}
                                <br />
                                <button className='contact_form_submit_button mt-3' type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </section>
        </>
    );
};

export default SubmitData;