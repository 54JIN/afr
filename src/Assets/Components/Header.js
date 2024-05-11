import React, {Component} from 'react';

//CSS Imports
import './Header.css'

class Header extends Component {
    render() {
        return(
            <div className="Header">
                <button>HOME</button>
                <button>ABOUT ME</button>
                <button>CONTACT</button>
                <button>REVIEWS</button>
            </div>
        )
    }
}

export default Header;