/* eslint-disable react/prop-types */
// import React from 'react';


const ProductCard = ({demoProduct}) => {

    return (
        <section className="my-4">
            <div className="container">
                <div className="row g-3">
                    {demoProduct.map((demo) => {
                        return <div key={demo.id} className="col-md-4">
                            <div className="shadow rounded overflow-hidden">
                                <div className="d-flex justify-content-center align-items-center overflow-hidden">
                                    <img style={{height: '250px', width: 'auto',}} src={demo.demoImg} alt={demo.demoTitle} />
                                </div>
                                <h3 className="py-2 fs-5 px-3 border-top">{demo.demoTitle}</h3>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProductCard;