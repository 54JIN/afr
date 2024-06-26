import { useRef, useState } from "react";

import { Link } from 'react-router-dom';

//CSS Imports
import "./Carousel.css"

const Carousel = (props) => {
    const images = props.images;
    const title = props.title;
    const type = props.type;
    const carousel = useRef();
    const [count, setCount] = useState(0);

    const incrementCarousel = delta => {
        if (!carousel.current) return;

        const width = carousel.current.offsetWidth;
        
        if (count + delta > Math.floor(images.length/4)) {
            setCount(0);
            carousel.current.scrollTo(0, 0);
            return;
        } else if (count + delta < 0) {
            setCount(Math.floor(images.length/4));
            carousel.current.scrollTo( width * images.length - 1, 0);
            return;
        }
        
        carousel.current.scrollTo(
            carousel.current.scrollLeft + width * delta, 
            0
        );
        setCount(c => c + delta);
    };

    return(
        <div className="carousel-frame">
            <div className="carousel-frame-title">
                <h1>{title}</h1>
            </div>
            <div className="carousel-container">
                <div className="carousel-btn left-btn" onClick={() => incrementCarousel(-1)}></div>
                <div className="carousel-btn right-btn" onClick={() => incrementCarousel(1)}></div>
                <div className="carousel" ref={carousel}>
                    {images.map((img, idx) => (
                        <Link to={`/afr/${type}Review/${idx}`}>
                            <div className="carousel-item" key={`${idx}-${img.title}`}>
                                <div className="carousel-item-img">
                                    <img src={img.image} alt={img.title} />
                                </div>
                                <div className="carousel-item-title">
                                    <h1>{img.title}</h1>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Carousel;