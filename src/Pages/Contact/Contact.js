import React, {Component} from 'react';

//Imported Components
import Header from '../../Assets/Components/Header';

//CSS Imports
import './Contact.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
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