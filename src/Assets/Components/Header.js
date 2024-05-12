import React, {Component} from 'react';

import { Link } from 'react-router-dom';

import AboutMe from '../../Pages/AboutMe/AboutMe';
//CSS Imports
import './Header.css'

class Header extends Component {
    render() {
        return(
            <div className="Header">
                <Link key={AboutMe} to={'/afr'}><button>HOME</button></Link>
                <Link key={AboutMe} to={'/afr/AboutMe'}><button>ABOUT ME</button></Link>
                <Link key={AboutMe} to={'/afr/AboutMe'}><button>CONTACT</button></Link>
                <Link key={AboutMe} to={'/afr/AboutMe'}><button>REVIEWS</button></Link>
                {/* <button>HOME</button>
                <button>ABOUT ME</button>
                <button>CONTACT</button>
                <button>REVIEWS</button> */}
            </div>
        )
    }
}

export default Header;