import React, {Component} from 'react';

//Imported Components
// import Header from '/Assets/Components/Header';
import Header from '../../Assets/Components/Header';
import Carousel from '../../Assets/Components/Carousel';

//CSS Imports
import './Home.css';

//Images
import background_img from '../../Assets/Images/backgroundImage.jpg';
import FoodList from '../../Assets/Data/FoodList';

class Home extends Component {
    render() {
        return(
            <div>
                <Header />
                <div className="Home-Title">
                    <div className="Home-Title-img">
                        <img src={background_img} alt="background image" />
                    </div>
                    <div className="Home-Title-txt">
                        <h1>Anonymous Food Review</h1>
                    </div>
                </div>
                <Carousel images={FoodList}/>
            </div>
        )
    }
}

export default Home;