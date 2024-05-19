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
    constructor(props) {
        super(props);
        this.state = {
            list: FoodList.concat(DrinkList),
        }
    }
    render() {
        return(
            <div className='Reviews'>
                <Header active="3"/>
                <div className='Reviews-content'>
                    <div className='Reviews-content-title'>
                        <h1>Our Collection</h1>
                    </div>
                    <div className='Reviews-content-list-wraper'>
                        <div className='Reviews-content-list'>
                            {this.state.list.map((img, idx) => (
                                <div className='Reviews-content-item-wrap'>
                                    <Link to={`/afr/FoodReview/${idx}`}>
                                        <div className="Reviews-content-item" key={`${idx}-${img.title}`}>
                                            <div className="Reviews-content-item-img">
                                                <img src={img.image} alt={img.title} />
                                            </div>
                                            <div className="Reviews-content-item-title">
                                                <h1>{img.title}</h1>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Reviews;