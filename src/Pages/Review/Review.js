//Imported Components
import Header from '../../Assets/Components/Header';

//Imported Images
import bowlActive from '../../Assets/Images/bowlActive.svg';
import bowlInactive from '../../Assets/Images/bowlInactive.svg';

//CSS Imports
import './Review.css';


export default function Review(props) {
    const obj = props.obj;
    return (
        <div className="Review">
            <Header active="3" />
            <div className="Review-Featured">
                <div className="Review-spotlight">
                    <img src={obj.image} alt={obj.title} />
                    <div className="Review-spotlight-content">
                        <div className="Review-spotlight-content-title">
                            <h1>{obj.title}</h1>
                        </div>
                        <div className='Review-spotlight-content-ratings'>
                            <div className="Review-spotlight-content-rating">
                                {(() => {
                                    const elements = [];
                                    for (let i = 0; i < obj.rating; i++) {
                                        elements.push(<img src={bowlActive} alt="Rating" />);
                                    }
                                    return elements;
                                })()}
                                {(() => {
                                    const elements = [];
                                    for (let i = 0; i < (5 - obj.rating); i++) {
                                        elements.push(<img src={bowlInactive} alt="Rating" />);
                                    }
                                    return elements;
                                })()}
                            </div>
                            <div className="Review-spotlight-content-cost">
                                <p>Cost: </p>
                                {(() => {
                                    const elements = [];
                                    for (let i = 0; i < obj.cost; i++) {
                                        elements.push(<p className='txtActive'>$</p>);
                                    }
                                    return elements;
                                })()}
                                {(() => {
                                    const elements = [];
                                    for (let i = 0; i < (4 - obj.cost); i++) {
                                        elements.push(<p className='txtInactive'>$</p>);
                                    }
                                    return elements;
                                })()}
                            </div>
                        </div>
                        
                        <div className="Review-spotlight-content-details">
                            <div className='Review-spotlight-content-details-address'>
                                <p>{obj.address}</p>
                            </div>
                            <div className="Review-spotlight-content-details-description">
                                <ul>
                                    <li>{obj.phone}</li>
                                    <li>{obj.cuisine}</li>
                                </ul>
                                
                                {/* <p>{obj.phone}</p>
                                <p>{obj.cuisine}</p> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Review-critique">
                    <div className="Review-critique-title">
                        <h1>Critique</h1>
                    </div>
                    <div className="Review-critique-content">
                        {obj.critique.map((txt) => (
                            <p>{txt}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}