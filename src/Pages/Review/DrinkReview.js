// import React, {Component} from 'react';

import { useParams } from 'react-router-dom';

//Imported Components
import Review from './Review';

//CSS Imports
import './DrinkReview.css';

//Images
import DrinkList from '../../Assets/Data/DrinkList';

export default function DrinkReview() {
    const params = useParams();
    return (
        <div className="DrinkReview">
            <Review obj={DrinkList[params.foodId]}/>
        </div>
    )
}