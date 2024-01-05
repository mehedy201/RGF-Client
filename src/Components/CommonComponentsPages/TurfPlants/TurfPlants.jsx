/* eslint-disable react/prop-types */
// import React from 'react';
import { Link } from 'react-router-dom';
import './TurfPlants.css'

const TurfPlants = ({item, shopTurfLink}) => {
    // console.log(item)
    // let { userId } = useParams();
    // console.log(userId)
    console.log(shopTurfLink/item.title)
    // category.map(element => console.log(element))

    return (
        <div className='col-md-4 turfPlantsCard'>
            <Link style={{textDecoration: 'none'}} to={`${shopTurfLink}/${item.title}`}>
                <div className="border turfPlantsCardInnerDiv">
                    <img style={{width: '100%', height: 'auto'}} src={item.image} alt="" />
                    <h3 className='px-2 py-3 text-center turfPlantsCardTitle'>{item.title}</h3>
                </div>
            </Link>
        </div>

    );
};

export default TurfPlants;