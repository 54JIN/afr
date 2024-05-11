import React, {Component} from 'react';

//CSS Imports
import './Featured.css';

class Featured extends Component {
    render() {
        return (
            <div className="Featured">
                <div className="Featured-img">
                    <img src={this.props.image} alt={this.props.title} />
                </div>
                <div className="Featured-title">
                    <h1>{this.props.title}</h1>
                </div>
            </div>
        )
    }
}

export default Featured;