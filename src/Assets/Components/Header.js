import React, {Component} from 'react';

import { Link } from 'react-router-dom';

//Imported Components
import Home from '../../Pages/Home/Home';
import AboutMe from '../../Pages/AboutMe/AboutMe';
import Contact from '../../Pages/Contact/Contact';
import Reviews from '../../Pages/Reviews/Reviews';

//CSS Imports
import './Header.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return(
            <div className="Header">
                <Link key={Home} to={'/afr'} ><button className={this.props.active === "0" ? "activeLink" : null}>HOME</button></Link>
                <Link key={AboutMe} to={'/afr/AboutMe'} ><button className={this.props.active === "1" ? "activeLink" : null}>ABOUT ME</button></Link>
                <Link key={Contact} to={'/afr/Contact'} ><button className={this.props.active === "2" ? "activeLink" : null}>CONTACT</button></Link>
                <Link key={Reviews} to={'/afr/Reviews'} ><button className={this.props.active === "3" ? "activeLink" : null}>REVIEWS</button></Link>
            </div>
        )
    }
}

export default Header;