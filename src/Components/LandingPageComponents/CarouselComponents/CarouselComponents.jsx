// import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Rate } from 'antd';
import './CarouselComponents.css'
import { useEffect } from "react";
import { useState } from "react";

const CarouselComponents = () => {


    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        fetch(`https://s.rgvturf.com/testimonials`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setTestimonials(data)
        })
    },[])

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
    return (
        <>
        <div className="container py-4">
        <div className='pt-md-5 py-2'><h2 style={{fontWeight: '700', fontSize: '3.125rem'}} className='text-center'>Customer Testimonials</h2></div>
            <Carousel 
                responsive={responsive}
                draggable={true}
                infinite={true}
                arrows={true}
                autoPlay={true}
                >
                {/* Need Just One for Dynamic _______________________________________________________________________________________ */}
                {
                    testimonials?.map((data, index) => {
                        return <div key={index} className="h-100 p-2 m-2 bg-light">
                                    <div className="carousel_style_css">
                                        <div style={{height: '180px', overflow:'hidden', borderRadius: '20px'}}>
                                            <img style={{width: '100%', height: 'auto'}} src={`https://s.rgvturf.com/${data.img}`} alt="" />
                                        </div>
                                        <h4 className="text-center pt-3">{data.title}</h4>
                                        <Rate className="d-block text-center text-black my-3" disabled value={data.rateingValue} />
                                        <p className="text-center">{data.text}</p>
                                        <h5 className="text-center text-dark">{data.name}</h5>
                                        <small className="d-block text-center">{data.address}</small>
                                    </div>
                                </div>
                    })  
                }
                
            </Carousel>
        </div>
        </>
    );
};

export default CarouselComponents;