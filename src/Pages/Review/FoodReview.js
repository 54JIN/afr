// import React, {Component} from 'react';

import { useParams } from 'react-router-dom';

//Imported Components
import Review from './Review';

//CSS Imports
import './FoodReview.css';

//Images
import FoodList from '../../Assets/Data/FoodList';

export default function FoodReview() {
    const params = useParams();
    return (
        <div className="FoodReview">
            <Review obj={FoodList[params.foodId]}/>
        </div>
    )
}