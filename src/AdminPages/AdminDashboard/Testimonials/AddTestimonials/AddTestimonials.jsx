/* eslint-disable no-unused-vars */
// import React from 'react';

import { Button, Rate, Spin } from "antd";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegTrashAlt } from "@react-icons/all-files/fa/FaRegTrashAlt";
import './AddTestimonials.css'

const AddTestimonials = () => {
    const navigate = useNavigate('')
    const handleNavigate = () => {
        navigate('/dashbord/testimonials')
    }


    const [imagePath, setImagePath] = useState('');
    const [rateingValue, setRatingValue] = useState()
    const [fileName, setFileName] = useState('')
    const [siLoading, setSiLoading] = useState(false);

    const singleImageUpload = (e) => {
        setSiLoading(true)
        const formData = new FormData();
        for (let i = 0; i < e.length; i++) {
        formData.append('files', e[i]);
        }
        axios.post('https://s.rgvturf.com/productImage', formData)
            .then(res => {
                console.log('Res', res.data)
                setFileName(res.data.data[0].filename)
                setImagePath(res.data.data[0].path)
                setSiLoading(false)
            })
            .catch(er => console.log(er))
    }
    // Delete Image ___________________
    const singleDeleteImage = () => {
        axios.delete(`https://s.rgvturf.com/productImageDelete/${fileName}`)
            .then(res => {
                console.log('Delete Image Response', res)
                setImagePath('')
            })
            .catch(er => console.log(er))
    }

    // Post Request ______________________________
    // Post Product Data. 
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data, rateingValue)
        const img = imagePath;
        const formData = {...data, img, fileName, rateingValue}
        console.log('Form Data',formData)

        axios.post(`https://s.rgvturf.com/testimonials`, formData)
            .then(res => {
                    toast.success('Succesfully Post Updated')
                    reset()
                    setImagePath('')
            })
            .catch(er => console.log(er))
    };

    
    return (
        <>
            <section>
                <div className="container border-bottom pb-2">
                    <div className="row">
                        <div className="col-md-6">
                            <h4 className="fs-5 fw-bold">Add New Testimonials</h4>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                            <Button onClick={() => handleNavigate()} size="large">Back To Testimonials</Button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
            <form className="add_product_form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row pt-3 g-md-2">
                        <div className="col-md-8 add_testimonials">
                        <input size="large" style={{width: '100%'}} placeholder="Testimonials Title" {...register("title", { required: true })}/>
                        {errors.title && <span className='text-danger'>Title is required</span>}
                        <textarea style={{width: '100%'}} name="" id="" cols="30" rows="5" placeholder="Testimonials Text" {...register("text", { required: true })}></textarea>
                        {errors.text && <span className='text-danger'>Testimonials Text is required</span>}
                        <input size="large" style={{width: '100%'}} placeholder="Name" {...register("name", { required: true })}/>
                        {errors.name && <span className='text-danger'>Name is required</span>}
                        <input size="large" style={{width: '100%'}} placeholder="Addresss" {...register("address", { required: true })}/>
                        {errors.address && <span className='text-danger'>Address is required</span>}
                        <span className="d-block pb-3">Rateing</span>
                        <div className="p-2 rounded border d-inline shadow shadow-sm" style={{backgroundColor: ''}}><Rate allowHalf defaultValue={0} onChange={(v) => setRatingValue(v)} /></div>                        
                        </div>
                        <div className="col-md-4 p-md-3 mt-3">
                            <h5 className='text-secondary fst-italic'>Select Image</h5>
                            <div className='rounded border shadow shadow-sm'>
                                <div style={{height: '200px', position: 'relative'}} className='p-3 overflow-hidden'>
                                    {
                                        siLoading && <Spin/>
                                    }
                                    {
                                        !imagePath && <img style={{height: '100px', weight: 'auto'}} src={'demoImage'} alt="" />
                                    }
                                    {
                                        imagePath && <img style={{height: '200px', weight: 'auto'}} src={`https://s.rgvturf.com/${imagePath}`} alt="" />
                                    }
                                    {
                                        imagePath && <FaRegTrashAlt style={{position: 'absolute', top: '10px', right: '10px', cursor: 'pointer'}} onClick={() => singleDeleteImage()} className='deleteIcon'/>
                                    }
                                </div>
                                <div className="border p-2">
                                    <input type="file" name='image' onChange={e => singleImageUpload(e.target.files)} />
                                </div>
                            </div>
                        </div>
                    </div>
                <button className="mt-4" type="submit">Publish</button>
            </form>
            <Toaster />
            </section>
        </>
    );
};

export default AddTestimonials;