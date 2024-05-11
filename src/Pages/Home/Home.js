import React, {Component} from 'react';

//Imported Components
// import Header from '/Assets/Components/Header';
import Header from '../../Assets/Components/Header';
import Featured from './Featured';
import Carousel from '../../Assets/Components/Carousel';

//CSS Imports
import './Home.css';

//Images
import background_img from '../../Assets/Images/backgroundImage.jpg';
import FoodList from '../../Assets/Data/FoodList';
import DrinkList from '../../Assets/Data/DrinkList';

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
                <div className="Featured-options">
                    <div className="Featured-options-title">
                        <h1>Featured for the Week</h1>
                    </div>
                    <div className="Featured-options-content">
                        <div className="Featured-main">
                            <div className="Featured-main-img">
                                <img src={FoodList[0].image} alt={FoodList[0].title} />
                            </div>
                            <div className="Featured-main-title">
                                <h1>{FoodList[0].title}</h1>
                            </div>
                        </div>
                        <div className="Featured-alternatives">
                            <div className="Featured-alternatives-1">
                                <Featured image={FoodList[1].image} title={FoodList[1].title}/>
                            </div>
                            <div className="Featured-alternatives-2">
                                <Featured image={FoodList[2].image} title={FoodList[2].title}/>
                            </div>
                            <div className="Featured-alternatives-3">
                                <Featured image={FoodList[3].image} title={FoodList[3].title}/>
                            </div>
                            <div className="Featured-alternatives-4">
                                <Featured image={FoodList[4].image} title={FoodList[4].title}/>
                            </div>
                        </div>
                    </div>
                </div>
                <Carousel title="Food" images={FoodList}/>
                <Carousel title="Drinks" images={DrinkList}/>
            </div>
        )
    }
}

export default Home;