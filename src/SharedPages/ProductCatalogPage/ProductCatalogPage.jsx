/* eslint-disable react/prop-types */
// import React from 'react';

import './ProductCatalogPage.css'
import { Select } from "antd";
import Search from "antd/es/input/Search";
import { Link, useParams } from "react-router-dom";
import demoImge from '../../assets/ProductImage/ar-162090.webp'
import ProductCard from '../ProductCard/ProductCard';

const ProductCatalogPage = ({heroText, buttonLink, buttonText, singlePageLink}) => {

    const { productCategory } = useParams();

    const onSearch = (value, _e, info) => console.log(info?.source, value);
    const handleChange = (value) => {
        console.log(`selected ${value}`);
      };

    const demoProduct = [
        {id: '1', demoTitle: 'Demo Title for Product 1', demoImg: demoImge},
        {id: '2', demoTitle: 'Demo Title for Product 2', demoImg: demoImge},
        {id: '3', demoTitle: 'Demo Title for Product 3', demoImg: demoImge},
        {id: '4', demoTitle: 'Demo Title for Product 4', demoImg: demoImge},
        {id: '5', demoTitle: 'Demo Title for Product 5', demoImg: demoImge},
        {id: '6', demoTitle: 'Demo Title for Product 6', demoImg: demoImge},
    ]




    return (
        <>
            <section className="backgroundImage">
                <div className="backgrondOverly">
                    <div className="container py-4">
                        <h1 className="text-center fw-bold text-white">{heroText}</h1> 
                    </div>
                </div>
            </section>
            <section className='border-bottom'>
                <div className="container">
                    <div className="row g-2 py-4">
                        <div className="col-sm-4">
                            <div className='d-flex justify-content-end align-items-center'><Search size= 'large' style={{width: '100%'}} placeholder="Search" onSearch={onSearch} enterButton /></div>
                        </div>
                        <div className="col-sm-4">
                            <div>
                                <Select
                                    defaultValue= {productCategory}
                                    size= 'large'
                                    style={{
                                        width: '100%',
                                    }}
                                    onChange={handleChange}
                                    options={[
                                        {value: 'jack',label: 'Jack',},
                                        {value: 'jack1',label: 'Jack1',},
                                        {value: 'jack2',label: 'Jack2',},
                                        {value: 'jack3',label: 'Jack3',},
                                    ]}
                                    />
                            </div>
                        </div>
                        <div className="col-sm-4">
                           <div className='d-flex justify-content-start align-items-center'><Link className='text-center fw-bold rounded' style={{textDecoration: 'none', padding: '7px 0px', backgroundColor: 'green', color: 'white', width: '100%'}} to={buttonLink}>{buttonText}</Link></div>
                        </div>
                    </div>
                </div>
            </section>
            <ProductCard demoProduct={demoProduct} singlePageLink={singlePageLink}/>
        </>
    );
};

export default ProductCatalogPage;