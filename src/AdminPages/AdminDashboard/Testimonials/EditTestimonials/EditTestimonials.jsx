// import React from 'react';

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { FaRegTrashAlt } from "@react-icons/all-files/fa/FaRegTrashAlt";
import { Rate, Spin } from "antd";
import './EditTestimonials.css'

const EditTestimonials = () => {

    const {id} = useParams('')
    const [imagePath, setImagePath] = useState('');
    const [fileName, setFileName] = useState('');
    const [loading, setLoading] = useState(false);
    const [testimonials, setTestimonials] = useState({})
    const [rateingValue, setRatingValue] = useState()

    useEffect( () => {
        fetch(`https://s.rgvturf.com/testimonials/${id}`)
        .then(res => res.json())
        .then(data =>{
            setRatingValue(data.rateingValue);
            setFileName(data.fileName)
            setImagePath(data.img)
            setTestimonials(data)
            })
    },[])


    const [deletedImg, setDeletedImg] = useState(false)
    const [newLoad, setNewLoad] = useState(false)
    const siImageUpload = (e) => {
        setNewLoad(true)
        const formData = new FormData();
        formData.append('files', e[0])
        axios.post('https://s.rgvturf.com/productImage', formData)
            .then(res => {
                console.log(res.data.data[0].path)
                setFileName(res.data.data[0].filename)
                setImagePath(res.data.data[0].path);
                // console.log(imagePath)
                setLoading(false)
                setNewLoad(false)
            })
            .catch(er => console.log(er))
    }
    // Delete Image ___________________
    const preImgDelete = (fileName) => {
        setDeletedImg(true)
        axios.delete(`https://s.rgvturf.com/productImageDelete/${fileName}`)
            .then(res => {
                console.log('Delete Image Response', res)
                setImagePath('')
            })
            .catch(er => console.log(er))
    }
    // Delete Image ___________________
    const siDeleteImage = () => {
        setDeletedImg(true)
        axios.delete(`https://s.rgvturf.com/productImageDelete/${fileName}`)
            .then(res => {
                console.log('Delete Image Response', res)
                setImagePath('')
            })
            .catch(er => console.log(er))
    }


    const { register, handleSubmit, reset, } = useForm();
    const onSubmit = data => {
        let img;
        if(!data.title){
            data.title = testimonials.title
        }
        if(!data.text){
            data.text = testimonials.text
        }
        if(!data.name){
            data.name = testimonials.name
        }
        if(!data.address){
            data.address = testimonials.address
        }
        img = imagePath
        const formData = {...data, rateingValue, fileName, img};
        console.log(formData)

        fetch(`https://s.rgvturf.com/testimonials/${id}`, {
          method: 'PUT',
          headers:{
              'content-type': 'application/json'
          },
          body: JSON.stringify(formData)
        }).then(res => res.json())
          .then(data => {
            if(data.success){
                toast.success('Succesfully Post Updated')
                reset();
            }
            if(data.error){
              toast.error(`Error ${data.error}`)
            }
          })
    };

    return (
        <section>
            <form className="add_product_form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row pt-3 g-md-2">
                        <div className="col-md-8 add_testimonials">
                        {
                            testimonials &&  <>
                                <input style={{width: '100%'}} defaultValue={testimonials.title} placeholder="Testimonials Title" {...register("title")}/>
                                <textarea  defaultValue={testimonials.text} style={{width: '100%'}} name="" id="" cols="30" rows="5" placeholder="Testimonials Text" {...register("text")}></textarea>
                                <input defaultValue={testimonials.name} style={{width: '100%'}} placeholder="Name" {...register("name")}/>
                                <input  defaultValue={testimonials.address} style={{width: '100%'}} placeholder="Addresss" {...register("address")}/>
                                <span className="d-block pb-3">Rateing</span>
                            </>
                        }
                        <div className="p-2 rounded border d-inline shadow shadow-sm" style={{backgroundColor: ''}}>
                            {
                                rateingValue && <Rate allowHalf defaultValue={rateingValue} onChange={(v) => setRatingValue(v)} />
                            }
                            
                        </div>                        
                        </div>
                        <div className="col-md-4 p-md-3 mt-3">
                            <h5 className='text-secondary fst-italic'>Select Image</h5>
                            <div className='rounded border shadow shadow-sm'>
                                <div style={{height: '200px', position: 'relative'}} className='p-3 overflow-hidden'>
                                    {
                                        loading && <Spin/>
                                    }
                                    {
                                        deletedImg == false && <>
                                            {
                                                testimonials?.img && <> 
                                                    <img style={{height: '200px', weight: '100%',}} src={`https://s.rgvturf.com/${testimonials?.img}`} alt="" />
                                                    <FaRegTrashAlt style={{position: 'absolute', top: '10px', right: '10px', cursor: 'pointer'}} onClick={() => preImgDelete(testimonials.fileName)} className='deleteIcon'/>
                                                </> 
                                            }
                                        </>
                                    }
                                    {
                                        deletedImg == true && <>
                                        {
                                            newLoad && <Spin/>
                                        }
                                        {
                                            imagePath &&  <img style={{height: '200px', weight: '100%'}} src={`https://s.rgvturf.com/${imagePath}`} alt="" />
                                        }
                                            <FaRegTrashAlt style={{position: 'absolute', top: '10px', right: '10px', cursor: 'pointer'}} onClick={() => siDeleteImage()} className='deleteIcon'/>
                                        </>
                                    }
                                </div>
                                <div className="border p-2">
                                <input type="file" name='image' onChange={e => siImageUpload(e.target.files)} />
                                </div>
                            </div>
                        </div>
                    </div>
                <button className="mt-4" type="submit">Publish</button>
            </form>
            <Toaster />
        </section>
    );
};

export default EditTestimonials;