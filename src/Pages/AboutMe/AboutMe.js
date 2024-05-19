import React, {Component} from 'react';

//Imported Components
import Header from '../../Assets/Components/Header';

//CSS Imports
import './AboutMe.css';

class AboutMe extends Component {
    render() {
        return (
            <div className="AboutMe">
                <Header active="1" />
            </div>
        )
    }
}

export default AboutMe;