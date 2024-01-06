// import React from 'react';

import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import demoImage from '../../assets/ProductImage/ar-162092.webp'

const ProductCarousel = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const newDemoData =[
          {id: '10', demoTitle: 'Demo title for Carousel 1', demoImg: demoImage},
          {id: '11', demoTitle: 'Demo title for Carousel 2', demoImg: demoImage},
          {id: '12', demoTitle: 'Demo title for Carousel 3', demoImg: demoImage},
          {id: '13', demoTitle: 'Demo title for Carousel 4', demoImg: demoImage},
          {id: '14', demoTitle: 'Demo title for Carousel 5', demoImg: demoImage},
          {id: '15', demoTitle: 'Demo title for Carousel 6', demoImg: demoImage},
      ]
    return (
        <section>
          <div className="container py-4">
            <Carousel 
                responsive={responsive}
                draggable={true}
                infinite={true}
                arrows={false}
                showDots={true}
                autoPlay={true}
                >
                {/* Need Just One for Dynamic _______________________________________________________________________________________ */}
                {
                    newDemoData.map(demo => {
                        return <div key={demo.id} className='mx-2'>
                                <Link style={{textDecoration: 'none', color: 'black'}} to={`/product-catalog/${demo.id}/${demo.demoTitle}`}>
                                    <div style={{cursor: 'pointer'}} className="overflow-hidden pointer">
                                        <div className="d-flex justify-content-center align-items-center overflow-hidden p-2">
                                            <img style={{height: '250px', width: 'auto',}} src={demo.demoImg} alt={demo.demoTitle} />
                                        </div>
                                        <h3 className="py-2 fs-6 px-3 border-top">{demo.demoTitle}</h3>
                                    </div>
                                </Link>
                        </div>
                    })
                }
                
            </Carousel>;
        </div>
        </section>
    );
};

export default ProductCarousel;