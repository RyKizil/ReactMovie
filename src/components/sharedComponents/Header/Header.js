import React from 'react';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar';


const Header = (props) => {
    return (
        <header>
        <div className="header-content">
            <img className="movie-logo" src="./images/reactMovie_logo.png" alt="logo" />
            <SearchBar callback={props.callback}/>
        </div>
        
        </header>

    )
}

export default Header;