/* eslint-disable react/prop-types */
// import React from 'react';
import './TurfPlants.css'

const TurfPlants = ({item}) => {
    console.log(item)
    // category.map(element => console.log(element))

    return (
        <div className='col-md-4 turfPlantsCard'>
            <div className="border turfPlantsCardInnerDiv">
                <img style={{width: '100%', height: 'auto'}} src={item.image} alt="" />
                <h3 className='px-2 py-3 text-center turfPlantsCardTitle'>{item.title}</h3>
            </div>
        </div>
    );
};

export default TurfPlants;