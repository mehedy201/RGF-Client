/* eslint-disable no-unused-vars */
// import React from 'react';
import './EditProduct.css'
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Select, Spin } from 'antd';
import axios from 'axios';
import { FaRegTrashAlt } from "@react-icons/all-files/fa/FaRegTrashAlt";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const EditProduct = () => {


    const {id} = useParams()
    const [product, setProduct] = useState({})
    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [imagePath, setImagePath] = useState('');
    const [fileName, setFileName] = useState('');
    const [loading, setLoading] = useState(false);
    const [muLoading, setMuLoading] = useState(false);
    const [multipleImage, setMultipleImage] = useState([])
    

    useEffect(() => {
        axios.get(`https://s.rgvturf.com/products/${id}`)
            .then(res => {
                setProduct(res.data)
                setCategory(res.data.category);
                setSubCategory(res.data.subCategory);
                setFileName(res.data.fileName);
                setMultipleImage(res.data.images);
            })
            .catch(er => console.log(er))
    },[])

    const [deletedImg, setDeletedImg] = useState(false)
    const siImageUpload = (e) => {
        const formData = new FormData();
        formData.append('files', e[0])
        axios.post('https://s.rgvturf.com/productImage', formData)
            .then(res => {
                console.log(res.data.data[0].path)
                setFileName(res.data.data[0].filename)
                setImagePath(res.data.data[0].path);
                console.log(imagePath)
                setLoading(false)
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


    // Post Request ______________________________
    // productCatelog
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const img = imagePath;
        if(!data.ProductTitle){
            data.ProductTitle = product.ProductTitle
        }
        if(!data.ProductDescription){
            data.ProductDescription = product.ProductDescription
        }
        
        const images = [...multipleImage, ...newImages]
        const formData = {...data, img, category, subCategory, fileName, images}
        console.log(formData)

        fetch(`https://s.rgvturf.com/products/${id}`, {
          method: 'PUT',
          headers:{
              'content-type': 'application/json'
          },
          body: JSON.stringify(formData)
        }).then(res => res.json())
          .then(data => {
            if(data.success){
                console.log(data)
                setProduct('')
                setCategory('');
                setSubCategory('');
                setImagePath('');
                setFileName('');
                setMultipleImage([]);
                setNewImages([]);
                toast.success('Succesfully Post Updated')
                reset();
            }
            if(data.error){
              toast.error(`Error ${data.error}`)
            }
          })
    };
    
    // Product Multiple Images Upload_______________________________________
    const [newImages, setNewImages] = useState([]);
    const imageUpload = async (e) => {
        setMuLoading(true)
        const formData = new FormData();
        for (let i = 0; i < e.length; i++) {
        formData.append('files', e[i]);
        }

        await axios.post('https://s.rgvturf.com/productImage', formData)
            .then(res => {
                setNewImages(res.data.data)
                setMuLoading(false)
            })
            .catch(er => console.log(er))
    }

    // Delete Image ___________________
    const deleteImage = (fileName) => {
        axios.delete(`https://s.rgvturf.com/productImageDelete/${fileName}`)
            .then(res => {
                const remain = newImages.filter(img => img.filename !== fileName);
                setNewImages(remain);
                toast.success('Deleted.!', {
                    duration: 3000,
                    position: 'top-right'
                });
            })
            .catch(er => console.log(er))
    }

    const preImageDelete = (fileName) => {
        console.log(fileName)
        axios.delete(`https://s.rgvturf.com/productImageDelete/${fileName}`)
            .then(res => {
                console.log(res)
                const remain = multipleImage.filter(img => img.filename !== fileName);
                setMultipleImage(remain);
                toast.success('Deleted.!', {
                    duration: 3000,
                    position: 'top-right'
                });
            })
            .catch(er => console.log(er))
    }



    return (
        <>
            <h4 className="border-bottom pb-2">Edit Product</h4>
            <form className="edit_product_form" onSubmit={handleSubmit(onSubmit)}>
                {
                    product && <div>
                    <input defaultValue={product?.ProductTitle} className="fw-bold" placeholder="Product Title" {...register("ProductTitle")} />
                    <textarea defaultValue={product?.ProductDescription}  rows={4} placeholder="Product Description" {...register("ProductDescription")} />
                </div>
                }
                {
                    !product && <div>
                    <input className="fw-bold" placeholder="Product Title" {...register("ProductTitle")} />
                    <textarea  rows={4} placeholder="Product Description" {...register("ProductDescription")} />
                </div> 
                }
                <h6 className="pt-2">Product Category</h6>
                <div className="row g-md-2">
                    <div className="col-md-6">
                        {
                            product?.category && <Select
                            defaultValue={product?.category}
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
                        }
                    </div>
                    <div className="col-md-6">
                        {
                            product?.category == 'Shop Turf' && <Select
                                mode="multiple"
                                allowClear
                                placeholder="Select Shop Turf Sub Category"
                                defaultValue={product?.subCategory[0]}
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
                                    {value: 'Residential Commercial Landscape',label: 'Residential Commercial Landscape',},
                                    {value: 'Sport and Athletic',label: 'Sport and Athletic',},
                                    {value: 'Childrens Play Areas',label: 'Childrens Play Areas',},
                                    {value: 'Kennels and Pets',label: 'Kennels and Pets',},
                                    {value: 'Golf and Putting Zones',label: 'Golf and Putting Zones',},
                                ]}
                            />
                        }
                        {
                            product?.category == 'Shop Plants' && <Select
                                // {...register("SubCategory", { required: true })} 
                                mode="multiple"
                                allowClear
                                defaultValue={product?.subCategory[0]}
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
                                    {value: 'Cactus',label: 'Shop Turf',},
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
                                    product?.category == 'Shop Turf' && <>
                                        <div className="col-md-6">
                                            <input defaultValue={product?.YarnType} {...register("YarnType")} className='mb-2' placeholder="Yarn Type" />
                                            <input defaultValue={product?.Weight} {...register("Weight")} className='mb-2' placeholder="Weight" />
                                            <input defaultValue={product?.SecondaryBacking} {...register("SecondaryBacking")} className='mb-2' placeholder="Secondary Backing" />
                                            <input defaultValue={product?.Pile_Height} {...register("Pile_Height")} className='mb-2' placeholder="Pile Height" />
                                        </div>
                                        <div className="col-md-6">
                                            <input defaultValue={product?.RollWidth} {...register("RollWidth")} className='mb-2' placeholder="Roll Width" />
                                            <input defaultValue={product?.Perforated} {...register("Perforated")} className='mb-2' placeholder="Perforated" />
                                            <input defaultValue={product?.Color} {...register("Color")} className='mb-2' placeholder="Color" />
                                            <input defaultValue={product?.PDFSpecSheet} {...register("PDFSpecSheet")} className='mb-2' placeholder="PDF Spec Sheet" />
                                        </div>
                                    </>
                                }
                                {/* Input Deatails Information For Shop Plants Products ____________________________ */}
                                {
                                    product?.category == 'Shop Plants' && <>
                                        <div className="col-md-6">
                                            {product?.Product_Code ? <input defaultValue={product?.Product_Code} {...register("Product_Code")} className='mb-2' placeholder="Product code" />:<input {...register("Product_Code")} className='mb-2' placeholder="Product code" />}
                                            <input defaultValue={product?.UPC} {...register("UPC")} className='mb-2' placeholder="UPC" />
                                            <input defaultValue={product?.ItemsPerPack} {...register("ItemsPerPack")} className='mb-2' placeholder="Items per pack" />
                                            <input defaultValue={product?.DominantColor} {...register("DominantColor")} className='mb-2' placeholder="Dominant color" />
                                            <input defaultValue={product?.PottedOrBaseIncluded} {...register("PottedOrBaseIncluded")} className='mb-2' placeholder="Potted or base included" />
                                        </div>
                                        <div className="col-md-6">
                                            <input defaultValue={product?.WeightOfEachItem} {...register("WeightOfEachItem")} className='mb-2' placeholder="Weight of each item" />
                                            <input defaultValue={product?.WeightOf1pack} {...register("WeightOf1pack")} className='mb-2' placeholder="Weight of 1 pack" />
                                            <input defaultValue={product?.ShippingBoxSize} {...register("ShippingBoxSize")} className='mb-2' placeholder="Shipping box size" />
                                            <input defaultValue={product?.ShippingDimensionalWeight} {...register("ShippingDimensionalWeight")} className='mb-2' placeholder="Shipping dimensional weight" />
                                            <input defaultValue={product?.OversizedFreightShipping} {...register("OversizedFreightShipping")} className='mb-2' placeholder="Over sized Freight Shipping" />
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h4>Select Product Image</h4>
                            <div className='border'>
                                <div style={{height: '200px'}} className='p-2 overflow-hidden imageBoxBackground'>
                                    {
                                        loading && <Spin/>
                                    }
                                    {
                                        deletedImg == false && <>
                                            {
                                                product?.img && <> <img style={{height: '200px', weight: 'auto'}} src={`https://s.rgvturf.com/${product.img}`} alt="" />
                                                                    <FaRegTrashAlt onClick={() => siDeleteImage()} className='deleteIcon'/>
                                                </> 
                                            }
                                        </>
                                    }
                                    {
                                        deletedImg == true && <>
                                        {
                                            imagePath &&  <img style={{height: '200px', weight: 'auto'}} src={`https://s.rgvturf.com/${imagePath}`} alt="" />
                                        }
                                            <FaRegTrashAlt onClick={() => siDeleteImage()} className='deleteIcon'/>
                                        </>
                                    }
                                </div>
                                <div className="border p-2">
                                    <input type="file" name='image' onChange={e => siImageUpload(e.target.files)} />
                                </div>
                            </div>
                            <h5 className='pt-2 text-secondary fst-italic'>Add Multiple Product Images</h5>
                            <div className='border p-2 d-flex flex-wrap'>
                                {
                                    multipleImage?.map((img, index) => {
                                        return <div key={index} style={{position: 'relative'}} className="mx-1">
                                                    <img style={{width: '100px', height: 'auto'}} src={`https://s.rgvturf.com/${img.path}`} alt="" />
                                                    <FaRegTrashAlt style={{position: 'absolute', top: '3px', right: '3px', backgroundColor: 'white', padding: '3px', borderRadius: '2px', cursor: 'pointer'}} onClick={() => preImageDelete(img.filename)}/>
                                                </div>
                                    })
                                }
                            </div>
                            <div className='rounded border shadow shadow-sm'>
                                <div style={{minHeight: '150px'}} className='border p-2 d-flex flex-wrap'>
                                    {
                                        muLoading == true && <Spin/>
                                    }
                                    {
                                        newImages && newImages?.map((img , index) => {
                                            return <div style={{position: 'relative'}} className='mx-1' key={index}>
                                                        <img style={{height: '60px', width: '60px'}} src={`https://s.rgvturf.com/${img.path}`} alt="" />
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

export default EditProduct;