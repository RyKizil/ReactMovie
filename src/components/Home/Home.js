import React, { Component } from 'react';

import HeroImage from '../sharedComponents/HeroImage/HeroImage';
import FourCol from '../sharedComponents/FourCol/FourCol';
import MovieCard from '../sharedComponents/MovieCard/MovieCard';
import LoadMoreBtn from '../sharedComponents/LoadMoreBtn/LoadMoreBtn';
import Spinner from '../sharedComponents/Spinner/Spinner';
import {BASE_IMG_URL,  POSTER_SIZE } from '../../config';
import './Home.css';

class Home extends Component {
    
    render(){
        return(
            <div className="movie-home">
            {this.props.hero ?
             <HeroImage  heroImg={this.props.hero} image={this.props.imageUrl} imgSize={this.props.imageSize}/>
             : null }
             <FourCol image={this.props.imageUrl} imgSize={this.props.imageSize} movies={this.props.movies} header={this.props.header ? 'Search Result:': 'Popular Movies'} loading={this.props.loading}>
             {this.props.movies.map ( (el, i) => {
                 return(
                     <MovieCard 
                     key={i}
                     cliclable={true}
                     image={el.poster_path ? `${BASE_IMG_URL}${POSTER_SIZE}${el.poster_path}`: '../../img/not_found.jpg'} 
                     movieId={el.id}
                     movieName={el.original_title} />

                 )
             })}
              </FourCol>
             {this.props.load ? <Spinner /> : null }
             <LoadMoreBtn onClick={this.props.onClick}/>
            </div>      
        )
    }
}
export default Home;