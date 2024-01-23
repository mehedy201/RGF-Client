/* eslint-disable no-unused-vars */
// import React from 'react';
import './AddProductPage.css'
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Select, Spin } from 'antd';
import axios from 'axios';
import { FaRegTrashAlt } from "@react-icons/all-files/fa/FaRegTrashAlt";
import toast, { Toaster } from 'react-hot-toast';
import demoImage from '../../../assets/free-gallery-187-902099.webp'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';



const AddProductPage = () => {

    const navigate = useNavigate()
    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');

    const [imagePath, setImagePath] = useState('');
    const [fileName, setFileName] = useState('')
    const [siLoading, setSiLoading] = useState(false)
    const [muLoading, setMuLoading] = useState(false)

    const singleImageUpload = (e) => {
        setSiLoading(true)
        const formData = new FormData();
        for (let i = 0; i < e.length; i++) {
        formData.append('files', e[i]);
        }
        axios.post('http://localhost:5000/productImage', formData)
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
        axios.delete(`http://localhost:5000/productImageDelete/${fileName}`)
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
        const img = imagePath;
        const formData = {...data, img, category, subCategory, fileName, images}
        console.log('Form Data',formData)

        axios.post(`http://localhost:5000/products`, formData)
            .then(res => {
                    toast.success('Succesfully Post Updated')
                    reset()
                    setImagePath('')
            })
            .catch(er => console.log(er))
    };

    // Product Multiple Images Upload_______________________________________
    const [images, setImages] = useState([]);
    const imageUpload = async (e) => {
        setMuLoading(true)
        const formData = new FormData();
        for (let i = 0; i < e.length; i++) {
        formData.append('files', e[i]);
        }

        await axios.post('http://localhost:5000/productImage', formData)
            .then(res => {
                setImages(res.data.data)
                setMuLoading(false)
            })
            .catch(er => console.log(er))
    }

    // Delete Image ___________________
    const deleteImage = (fileName) => {
        axios.delete(`http://localhost:5000/productImageDelete/${fileName}`)
            .then(res => {
                const remain = images.filter(img => img.filename !== fileName);
                setImages(remain);
                toast.success('Deleted.!', {
                    duration: 3000,
                    position: 'top-right'
                });
            })
            .catch(er => console.log(er))
    }




    return (
        <>
            <h4 className="border-bottom pb-2">Add Product</h4>
            <form className="add_product_form" onSubmit={handleSubmit(onSubmit)}>
                <input type='text' className="fw-bold" placeholder="Product Title" name="ProductTitle" {...register("ProductTitle", { required: true })} />
                <textarea size="large" rows={4} placeholder="Product Description" {...register("ProductDescription", { required: true })} />
                <h6 className="pt-2">Product Category</h6>
                <div className="row g-md-2">
                    <div className="col-md-6">
                        <Select
                            placeholder="Select Category"
                            className="me-md-2"
                            size="large"
                            style={{
                                width: '100%',
                            }}
                            onChange={e => setCategory(e)}
                            options={[
                                {value: 'Shop Turf',label: 'Shop Turf',},
                                {value: 'Shop Plants',label: 'Shop Plants',},
                            ]}
                        />
                    </div>
                    <div className="col-md-6">
                        {
                            category == 'Shop Turf' && <Select
                                mode="multiple"
                                allowClear
                                placeholder="Select Shop Turf Sub Category"
                                size="large"
                                style={{
                                    width: '100%',
                                }}
                                // onChange={e => setSubCategory(e)}
                                onChange={e => {
                                    const sub = [];
                                    sub.push(e)
                                    setSubCategory(sub)
                                }}
                                options={[
                                    {value: 'Residential Commercial Landscape',label: 'Residential Commercial Landscape',},
                                    {value: 'Sport and Athletic',label: 'Sport and Athletic',},
                                    {value: 'Childrens Play Areas',label: 'Childrens Play Areas',},
                                    {value: 'Kennels and Pets',label: 'Kennels and Pets',},
                                    {value: 'Golf and Putting Zones',label: 'Golf and Putting Zones',},
                                ]}
                                
                            />
                        }
                        {
                            category == 'Shop Plants' && <Select
                                // {...register("SubCategory", { required: true })} 
                                mode="multiple"
                                allowClear
                                placeholder="Select Shop Plants Sub Category"
                                size="large"
                                style={{
                                    width: '100%',
                                }}
                                onChange={e => {
                                    const sub = [];
                                    sub.push(e)
                                    setSubCategory(sub)
                                }}
                                options={[
                                    {value: 'Bushes And Shrubs',label: 'Bushes And Shrubs',},
                                    {value: 'Cactus',label: 'Cactus',},
                                    {value: 'Cypress trees',label: 'Cypress trees',},
                                    {value: 'Flowers Arrangements',label: 'Flowers Arrangements',},
                                    {value: 'Trees And Palms',label: 'Trees And Palms',},
                                ]}
                            />
                        }
                    </div>
                    <div className="row pt-3 g-md-2">
                        <div className="col-md-8">
                            <h5>Product Detail Information</h5>
                            <div className="row">
                                {/* Input Deatails Information For Shop Plants Products ____________________________ */}
                                {
                                    category == 'Shop Turf' && <>
                                        <div className="col-md-6">
                                            <input {...register("YarnType")} className='mb-2' placeholder="Yarn Type" />
                                            <input {...register("Weight")} className='mb-2' placeholder="Weight" />
                                            <input {...register("SecondaryBacking")} className='mb-2' placeholder="Secondary Backing" />
                                            <input {...register("Pile_Height")} className='mb-2' placeholder="Pile Height" />
                                        </div>
                                        <div className="col-md-6">
                                            <input {...register("RollWidth")} className='mb-2' placeholder="Roll Width" />
                                            <input {...register("Perforated")} className='mb-2' placeholder="Perforated" />
                                            <input {...register("Color")} className='mb-2' placeholder="Color" />
                                            <input {...register("PDFSpecSheet")} className='mb-2' placeholder="PDF Spec Sheet" />
                                        </div>
                                    </>
                                }
                                {/* Input Deatails Information For Shop Plants Products ____________________________ */}
                                {
                                    category == 'Shop Plants' && <>
                                        <div className="col-md-6">
                                            <input {...register("Product_Code")} className='mb-2' placeholder="Product code" />
                                            <input {...register("UPC")} className='mb-2' placeholder="UPC" />
                                            <input {...register("ItemsPerPack")} className='mb-2' placeholder="Items per pack" />
                                            <input {...register("DominantColor")} className='mb-2' placeholder="Dominant color" />
                                            <input {...register("PottedOrBaseIncluded")} className='mb-2' placeholder="Potted or base included" />
                                        </div>
                                        <div className="col-md-6">
                                            <input {...register("WeightOfEachItem")} className='mb-2' placeholder="Weight of each item" />
                                            <input {...register("WeightOf1pack")} className='mb-2' placeholder="Weight of 1 pack" />
                                            <input {...register("ShippingBoxSize")} className='mb-2' placeholder="Shipping box size" />
                                            <input {...register("ShippingDimensionalWeight")} className='mb-2' placeholder="Shipping dimensional weight" />
                                            <input {...register("OversizedFreightShipping")} className='mb-2' placeholder="Oversized freight shipping" />
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h4 className='text-secondary fst-italic'>Select Featured Image</h4>
                            <div className='rounded border shadow shadow-sm'>
                                <div style={{height: '200px'}} className='p-2 overflow-hidden imageBoxBackground'>
                                    {
                                        siLoading && <Spin/>
                                    }
                                    {
                                        !imagePath && <img style={{height: '100px', weight: 'auto'}} src={demoImage} alt="" />
                                    }
                                    {
                                        imagePath && <img style={{height: '200px', weight: 'auto'}} src={`http://localhost:5000/${imagePath}`} alt="" />
                                    }
                                    {
                                        imagePath && <FaRegTrashAlt onClick={() => singleDeleteImage()} className='deleteIcon'/>
                                    }
                                </div>
                                <div className="border p-2">
                                    <input type="file" name='image' onChange={e => singleImageUpload(e.target.files)} />
                                </div>
                            </div>


                            <h5 className='pt-2 text-secondary fst-italic'>Add Multiple Product Images</h5>
                            <div className='rounded border shadow shadow-sm'>
                                <div style={{minHeight: '150px'}} className='border p-2 d-flex flex-wrap'>
                                    {
                                        muLoading == true && <Spin/>
                                    }
                                    {
                                        images && images?.map((img , index) => {
                                            return <div style={{position: 'relative'}} className='mx-1' key={index}>
                                                        <img style={{height: '60px', width: '60px'}} src={`http://localhost:5000/${img.path}`} alt="" />
                                                        <FaRegTrashAlt onClick={() => deleteImage(img.filename)} style={{position: 'absolute', top: '3px', right: '3px', backgroundColor: 'white', padding: '3px', borderRadius: '2px', cursor: 'pointer'}}/>
                                                    </div>
                                        })
                                    }
                                </div>
                                <div>
                                    <input type="file" name='image' onChange={e => imageUpload(e.target.files)} multiple/>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
                <button type="submit">Publish</button>
            </form>
            <Toaster />
        </>
    );
};

export default AddProductPage;