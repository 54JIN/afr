import React, {Component} from 'react';

import { Link } from 'react-router-dom';

//Imported Components
import Header from '../../Assets/Components/Header';
import Carousel from '../../Assets/Components/Carousel';

//CSS Imports
import './Contact.css';

class Contact extends Component {
    render() {
        return(
            <div className='Contact'>
                <Header active="2"/>
                <div className='Contact-content'>
                    <h1>Get In Contact</h1>
                    <p>Reach out to AFR regarding any reviews, criticism or places for us to try out!!! </p>
                    <button>Reach Out</button>
                </div>
            </div>
        )
    }
}

export default Contact;