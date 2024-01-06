// import React from 'react';
import './SingleProductPage.css'
import { Link, ScrollRestoration, useParams } from "react-router-dom";
import { Tab, Tabs } from 'react-bootstrap';
import demoImage from '../../assets/ProductImage/ar-162090.webp';
import {
    FacebookShareButton,
    FacebookIcon,
    PinterestShareButton,
    PinterestIcon,
    TwitterShareButton,
    XIcon,
  } from "react-share";
  import { FaArrowLeft } from "@react-icons/all-files/fa/FaArrowLeft";
  import { FaThLarge } from "@react-icons/all-files/fa/FaThLarge";
  import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";

const SingleProductPage = () => {
    const {id,title} = useParams()
    console.log(id, title)
    return (
        <>
        <ScrollRestoration />
        <section className="my-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <h1>Dynamic Product Title will Have</h1>
                    </div>
                    <div className="col-md-2">
                        <div style={{backgroundColor: '#eaefe4'}} className='border d-md-flex justify-content-md-center'>
                            <FaArrowLeft data-bs-toggle="tooltip" data-bs-placement="bottom" title="Previous Item" style={{color: 'green', cursor: 'pointer'}}  className='fs-2 py-2 mx-2'/>
                            <FaThLarge data-bs-toggle="tooltip" data-bs-placement="bottom" title="Catelog Page" style={{color: 'green', cursor: 'pointer'}}  className='fs-2 py-2 mx-2'/>
                            <FaArrowRight data-bs-toggle="tooltip" data-bs-placement="bottom" title="Next Item" style={{color: 'green', cursor: 'pointer'}}  className='fs-2 py-2 mx-2'/>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="border px-3 py-2">
                            <Link className="text-secondary pe-2" style={{textDecoration: 'none'}}>Home &gt;&gt;</Link>
                            <Link className="text-secondary pe-2" style={{textDecoration: 'none'}}>All Product &gt;&gt;</Link>
                            <span className="text-secondary">Dynamic Product Title will Have</span>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className='my-2'>
                            <TwitterShareButton
                            url={'/'}
                            title={title}
                            className="Demo__some-network__share-button mx-1"
                            >
                            <XIcon size={32} round />
                            </TwitterShareButton>
                            
                            <FacebookShareButton
                            url={'/'}
                            className="Demo__some-network__share-button mx-1"
                            >
                                <FacebookIcon size={32} round />
                            </FacebookShareButton>

                            <PinterestShareButton
                            url={'/'}
                            className="Demo__some-network__share-button mx-1"
                            >
                                <PinterestIcon size={32} round />
                            </PinterestShareButton>
                        </div>
                    </div>
                </div>
                <div className="row">  
                    <div className="col d-flex justify-content-center p-2 overflow-hidden">
                        <img style={{height: '100vh', width: 'auto'}} src={demoImage} alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col for_product_tab_style">
                        <Tabs
                            defaultActiveKey="product_description"
                            id="product_details_tabs"
                            >
                            <Tab eventKey="product_description" title="PRODUCT DESCRIPTION">
                                <div>Product Descriptio text </div>
                            </Tab>
                            <Tab eventKey="product_features" title="PRODUCT FEATURES">
                                Tab content for Profile
                            </Tab>
                            <Tab eventKey="reques_a_quate" title="REQUEST A QUATE">
                                Tab content for Contact
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
        
        </>
    );
};

export default SingleProductPage;