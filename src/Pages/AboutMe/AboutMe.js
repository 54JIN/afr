import React, {Component} from 'react';

//Imported Components
import Header from '../../Assets/Components/Header';
import Carousel from '../../Assets/Components/Carousel';

//Imported Images
import logo from '../../Assets/Images/logo.png';
import FoodList from '../../Assets/Data/FoodList';

//CSS Imports
import './AboutMe.css';

class AboutMe extends Component {
    render() {
        return (
            <div className="AboutMe">
                <Header active="1" />
                <div className='AboutMe-Content'>
                    <div className='AboutMe-Content-img'>
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className='AboutMe-Content-description'>
                        <div className='AboutMe-Content-description-title'>
                            <p>AFR is an anonymous food review blog committed to uncovering and evaluating the best restaurants in the Rutgers, New Brunswick area.</p>
                        </div>
                        <div className='AboutMe-Content-description-details'>
                            <p>At AFR, our mission is to guide the Rutgers community to exceptional dining experiences that foster lasting memories. We meticulously review various dining locations alongside fellow Rutgers peers, adhering to a stringent set of guidelines. Our comprehensive evaluation process ensures that each venue excels in ambiance, customer service, and the quality of food.</p>
                            <p>Whether you're planning a romantic date night, organizing a gathering for a special event, or simply looking for a great place to dine out, AFR is here to help you make informed decisions. We believe that every dining experience should be extraordinary, and we are committed to recommending only the best venues that meet our high standards.</p>
                        </div>
                    </div>
                </div>
                <Carousel type="Food" images={FoodList}/>
            </div>
        )
    }
}

export default AboutMe;