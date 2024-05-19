import React, {Component} from 'react';

import { Link } from 'react-router-dom';

//Imported Components
import Header from '../../Assets/Components/Header';
import Carousel from '../../Assets/Components/Carousel';

//CSS Imports
import './Reviews.css';

//Images
import FoodList from '../../Assets/Data/FoodList';
import DrinkList from '../../Assets/Data/DrinkList';

class Reviews extends Component {
    render() {
        return(
            <div className='Reviews'>
                <Header active="3"/>
            </div>
        )
    }
}

export default Reviews;