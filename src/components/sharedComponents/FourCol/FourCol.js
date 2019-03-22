import React from 'react';

import './FourCol.css';

import notFound from '../../../img/not_found.jpg';

const FourCol = (props) => {
    
    const movie = props.movies.map(movie => {
        return (
        <div className="my-card" key={movie.id}>
         <img className="my-card-img" src={movie.poster_path ? `${props.image}${props.imgSize}${movie.poster_path}`: notFound} alt={movie.title} />
         <h4>{movie.title}</h4>
        </div>
        )
    })
return (
    <div>
    <h1 className="info-movies">{props.header}</h1>
   <div className="m-container">
        {movie}
    </div>
    </div>
)

}

export default FourCol;