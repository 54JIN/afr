//Imported Components
import Header from '../../Assets/Components/Header';

//CSS Imports
import './Review.css';


export default function Review(props) {
    const obj = props.obj;
    return (
        <div className="Review">
            <Header />
            <div className="Review-Featured">
                <div className="Review-spotlight">
                    <img src={obj.image} alt={obj.title} />
                    <div className="Review-spotlight-content">
                        <div className="Review-spotlight-content-title">
                            <h1>{obj.title}</h1>
                        </div>
                        <div className="Review-spotlight-content-details">
                            <h4>{obj.address}</h4>
                            <div className="Review-spotlight-content-details-description">
                                <p>{obj.phone}</p>
                                <p>{obj.cuisine}</p>
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