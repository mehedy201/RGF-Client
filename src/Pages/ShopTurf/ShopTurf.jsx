// import React from 'react';
import TurfPlants from '../../Components/CommonComponentsPages/TurfPlants/TurfPlants';
import './ShopTurf.css'
import residentialLandscope from '../../assets/shop-turf/residential-and-commercial.webp'
import sportAndAthletic from '../../assets/shop-turf/sports-and-athletics.webp'
import childrencPlay from '../../assets/shop-turf/childrens-play-areas.webp'
import kennels from '../../assets/shop-turf/kennels-and-pets.webp'
import golf from '../../assets/shop-turf/golf-and-putting-zones.webp'
import syntheticPlants from '../../assets/shop-turf/synthetic-plants.webp'
import { Link, ScrollRestoration } from 'react-router-dom';


const ShopTurf = () => {

    const items = [
        {
            id: '1',
            title: 'Residential Commercial Landscape',
            image: residentialLandscope,
        },
        {
            id: '2',
            title: 'Sport and Athletic',
            image: sportAndAthletic,
        },
        {
            id: '3',
            title: 'Childrens Play Areas',
            image: childrencPlay,
        },
        {
            id: '4',
            title: 'Kennels and Pets',
            image: kennels,
        },
        {
            id: '5',
            title: 'Golf and Putting Zones',
            image: golf,
        },
    ]


    return (
        <>
        <ScrollRestoration />
        <section id="shopTurfSection">
            <div className='shopTurfHeroBackground'>
                <div className='backgroundOverlyColor  py-4'>
                    <h1 className="shopTurfTitle text-center py-5">Premium Synthetic Turf</h1>
                </div>
            </div>
            <div className="container my-5">
                <div className="row g-2 g-md-5 px-md-5 mx-md-5">
                        {
                            items.map((item, index) => <TurfPlants shopTurfLink={'turf'} item={item} key={index}/>)
                        }
                        <div className='col-md-4 turfPlantsCard'>
                            <Link style={{textDecoration: 'none'}} to={`/shop-plants`}>
                                <div className="border turfPlantsCardInnerDiv">
                                    <img style={{width: '100%', height: 'auto'}} src={syntheticPlants} alt="" />
                                    <h3 className='px-2 py-3 text-center turfPlantsCardTitle'>Synthetic Plants</h3>
                                </div>
                            </Link>
                        </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default ShopTurf;