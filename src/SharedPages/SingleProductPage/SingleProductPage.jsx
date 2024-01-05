// import React from 'react';

import { useParams } from "react-router-dom";

const SingleProductPage = () => {
    const {id,title} = useParams()
    console.log(id, title)
    return (
        <section>
            <div className="container">
                <h1>Single Product</h1>
            </div>
        </section>
    );
};

export default SingleProductPage;