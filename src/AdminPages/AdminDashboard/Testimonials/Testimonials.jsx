// import React from 'react';

import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEdit } from "@react-icons/all-files/fa/FaRegEdit";
import { FaRegTrashAlt } from "@react-icons/all-files/fa/FaRegTrashAlt";
import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const Testimonials = () => {
    const navigate = useNavigate('')
    const handleNavigate = () => {
        navigate('/dashbord/add-testimonials')
    }

    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        fetch(`https://s.rgvturf.com/testimonials`)
        .then(res => res.json())
        .then(data => {
            setTestimonials(data)
        })
    },[])


    const deleteTestimonials = (id , fileName) => {
        const proceed = window.confirm('Are you sure to Delete');
        if(proceed){
            axios.delete(`https://s.rgvturf.com/productImageDelete/${fileName}`)
            .then(res => {
                console.log('Delete Image Response', res)
            })
            .catch(er => console.log(er))

            const url = `https://s.rgvturf.com/testimonials/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => console.log(res))
            .then(data => {
                const remain = testimonials.filter(item => item._id !== id);
                setTestimonials(remain)
                console.log(data,);
                toast.success('Product Deleted.!', {
                    duration: 3000,
                    position: 'top-right'
                });
            })
        }
    }
    return (
        <>
            <section>
                <div className="container border-bottom pb-2">
                    <div className="row">
                        <div className="col-md-6">
                            <h4 className="fs-5 fw-bold">Total Testimonial: {testimonials.length}</h4>
                        </div>
                        <div className="col-md-6 d-md-flex justify-content-end">
                            <Button onClick={() => handleNavigate()} size="large">Add Testimonial</Button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="table-responsive">
                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                    <th scope="col">Image</th>
                                    <th scope="col">Title</th>
                                    <th className="text-end" scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        testimonials?.map((t, index) => {
                                            return <tr key={index}>
                                                        <td><img style={{height: '-webkit-fill-available', width: '50px', borderRadius: '5px', marginRight: '10px'}} src={`https://s.rgvturf.com/${t.img}`} alt="" /></td>
                                                        <td> <span className="fw-bold">{t.title}</span> </td>
                                                        <td className="text-end">
                                                            <Link to={`/dashbord/edit-testimonials/${t._id}`}><FaRegEdit className='mx-2 icon_style_manage_page' data-bs-toggle="tooltip" data-bs-placement="top" title="Edit testimonials"/></Link>
                                                            <FaRegTrashAlt onClick={() => deleteTestimonials(t._id, t.fileName)} style={{color: 'red'}} className='mx-2 icon_style_manage_page mt-1' data-bs-toggle="tooltip" data-bs-placement="top" title="Delete Product"/>
                                                        </td>
                                                    </tr>
                                        })
                                    }
                                </tbody>
                                
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonials;