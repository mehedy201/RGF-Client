// import React from 'react';
import './ShopPlants.css'
import TurfPlants from '../../Components/CommonComponentsPages/TurfPlants/TurfPlants';
import bushes from '../../assets/shop-plants/bushesandshrubs.webp'
import cactus from '../../assets/shop-plants/cactus.webp'
import cypress from '../../assets/shop-plants/istockphoto-1057939746-612x612.webp'
import flowers from '../../assets/shop-plants/flowers.webp'
import trees from '../../assets/shop-plants/ezgif-5-fe0f17fe03.webp'
import synthetiic from '../../assets/shop-plants/sports-and-athletics.webp'
import { Link, ScrollRestoration } from 'react-router-dom';

const ShopPlants = () => {

    const items = [
        {
            id: '1',
            title: 'Bushes And Shrubs',
            image: bushes,
        },
        {
            id: '2',
            title: 'Cactus',
            image: cactus,
        },
        {
            id: '3',
            title: 'Cypress trees',
            image: cypress,
        },
        {
            id: '4',
            title: 'Flowers Arrangements',
            image: flowers,
        },
        {
            id: '5',
            title: 'Trees And Palms',
            image: trees,
        },
    ]


    return (
        <>
        <ScrollRestoration />
        <section id="shopPlantsSection">
            <div className='shopPlantsHeroBackground'>
                <div className='backgroundOverlyColor'>
                    <div className="container"><h1 className="shopPlantsTitle py-4 text-center">Outdoor, Synthetic, UV Coated Plants</h1></div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row g-2 g-md-5 px-md-5 mx-md-5">
                        {
                            items.map((item, index) => <TurfPlants shopTurfLink={'plants'} item={item} key={index}/>)
                        }
                        <div className='col-md-4 turfPlantsCard'>
                            <Link style={{textDecoration: 'none'}} to={`/shop-turf`}>
                                <div className="border turfPlantsCardInnerDiv">
                                    <img style={{width: '100%', height: 'auto'}} src={synthetiic} alt="" />
                                    <h3 className='px-2 py-3 text-center turfPlantsCardTitle'>Synthetic Turf</h3>
                                </div>
                            </Link>
                        </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default ShopPlants;