/* eslint-disable no-unused-vars */
import {useState} from 'react';
import axios from 'axios'
import './AddModelingImage.css'
import image from '../../../assets/AboutUsImages/2023-10-21-13.41.50-1-1024x720.webp'
import { Spin } from 'antd';
import { FaRegTrashAlt } from "@react-icons/all-files/fa/FaRegTrashAlt";
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AddModelingImage = () => {


    const [imageData, setImageData] = useState()
    const [images, setImages] = useState();
    const [loading, setLoading] =useState(false)
    const imageUpload = async (e) => {
        setLoading(true)
        const formData = new FormData();
        //********* HERE IS THE CHANGE ***********
        for (let i = 0; i < e.length; i++) {
        formData.append('files', e[i]);
        }

        await axios.post('http://localhost:5000/modelingImg', formData)
            .then(res => {
                setImages(res.data)
                setLoading(false)
            })
            .catch(er => console.log(er))
    }

    // Delete Image ___________________
    const deleteImage = (fileName) => {
        axios.delete(`http://localhost:5000/modelingImg/${fileName}`)
            .then(res => {
                const remain = images.filter(img => img.filename !== fileName);
                setImages(remain);
            })
            .catch(er => console.log(er))
    }

    const uploadImages = () => {
        axios.post('http://localhost:5000/modelingImageApi', images)
        .then(res => console.log(res))
        .catch(er => console.log(er))
    }

    useEffect(() => {
        axios.get('http://localhost:5000/modelingImageApi').then(data => setImageData(data.data)).catch(err => console.log(err))
    }, [])

    const deleteFromServer = (one, two) => {
        const proceed = window.confirm('Are you sure to Delete');
        if(proceed){
            const url = `http://localhost:5000/modelingImageApi/${two}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => console.log(res))
            .then(data => {
                     axios.delete(`http://localhost:5000/modelingImg/${one}`)
                    .then(res => {
                        const remain = images.filter(img => img.filename !== one);
                        setImages(remain);
                    })
                    .catch(er => console.log(er))

                    toast.success('Deleted.!', {
                        duration: 3000,
                        position: 'top-right'
                    });
            })
        }
        console.log('One=', one, 'Two=', two)
    }

    return (
        <div className='container'>
            <div className="row g-2">
                <div className="col-md-4">
                <div style={{minHeight: '200px'}} className='border p-2 parent_image_box'>
                    {
                        loading == true && <Spin/>
                    }
                    {
                        images?.map((img , index) => {
                            return <div className='imgBox' key={index}>
                                        <img style={{height: '60px', width: '60px'}} src={`http://localhost:5000/${img.path}`} alt="" />
                                        <FaRegTrashAlt onClick={() => deleteImage(img.filename)} className='deleteIconModeling'/>
                                    </div>
                        })
                    }
                </div>
                <input type="file" name='image' onChange={e => imageUpload(e.target.files)} multiple/>
                <button className='mt-2' onClick={uploadImages}>Publish</button>
                </div>
                <div className="col-md-8">
                    <div className="row">
                        {
                            imageData?.map(img => {
                                return <div key={img._id} className="col-md-2">
                                    <img style={{width: '100%', height: 'auto'}} src={`http://localhost:5000/${img.path}`} alt="" />
                                        <FaRegTrashAlt onClick={() => deleteFromServer(img.filename, img._id)} className='deleteIconModeling'/>
                                    </div>
                            })
                        }
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default AddModelingImage;