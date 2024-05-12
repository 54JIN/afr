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
                            <h4>101 New World Way, South Plainfield, NJ, 07080, United States</h4>
                            <div className="Review-spotlight-content-details-description">
                                <p>+1 (908) 822-2030</p>
                                <p>Vietnamese</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Review-critique">
                    <div className="Review-critique-title">
                        <h1>Critique</h1>
                    </div>
                    <div className="Review-critique-content">
                        <p>
                            Nestled in a cozy corner, the restaurant offers an ambiance that is nothing short of enchanting, making it an ideal locale for both romantic evenings and sizable gatherings. Upon entering, one is immediately struck by the meticulous cleanliness and the prompt, attentive service that sets the stage for a delightful dining experience.
                        </p>
                        <p>
                            The culinary offerings arrive piping hot, their presentation a feast for the eyes, promising flavors as compelling as their visuals. The filet mignon pho, in particular, strikes a nostalgic chord, its rich, savory broth perfectly complementing the tender slices of beef. Meanwhile, the grilled pork spring rolls are a revelation—crisp, flavorful, and utterly irresistible, especially when paired with a velvety peanut sauce that adds just the right touch of sweetness and depth.
                        </p>
                        <p>
                            The Vietnamese coffee, however, while promising, falls slightly short of its potential. The flavor profile begs for refinement to reach the same heights of excellence as the rest of the meal.
                        </p>
                        <p>
                            In terms of value, the pricing is well-matched to the quality of food and service provided, making each dish a worthwhile indulgence. This restaurant is unquestionably deserving of a return visit, offering a dining experience that tantalizingly hints at becoming a staple for those in pursuit of culinary delights.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}