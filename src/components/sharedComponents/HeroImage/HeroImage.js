import React from 'react';
import { BASE_IMG_URL, BACKDROP_SIZE} from '../../../config';
import './HeroImage.css';

const HeroImage = (props) => {
    return (
        <div className="hero-img">
         <img src={ `${BASE_IMG_URL}${BACKDROP_SIZE}${props.heroImg.backdrop_path}`} alt={props.heroImg.title}/>
         <div className="hero-img-content">
         <h1>{props.heroImg.title}</h1>
         <p>{props.heroImg.overview}</p>
         </div>
         
        </div>
    )
}

export default HeroImage;