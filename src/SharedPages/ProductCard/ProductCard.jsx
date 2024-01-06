/* eslint-disable react/prop-types */
// import React from 'react';

import { Link,} from "react-router-dom";


const ProductCard = ({demoProduct}) => {


    return (
        <section className="my-4">
            <div className="container">
                <div className="row g-3">
                    {demoProduct.map((demo) => {
                        return <div key={demo.id} className="col-md-4">
                            <Link style={{textDecoration: 'none', color: 'black'}} to={`/product-catalog/${demo.id}/${demo.demoTitle}`}>
                                <div style={{cursor: 'pointer'}} className="overflow-hidden pointer">
                                    <div className="d-flex justify-content-center align-items-center overflow-hidden p-2">
                                        <img style={{height: '250px', width: 'auto',}} src={demo.demoImg} alt={demo.demoTitle} />
                                    </div>
                                    <h3 className="py-2 fs-6 px-3 border-top">{demo.demoTitle}</h3>
                                </div>
                            </Link>
                        </div>
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProductCard;