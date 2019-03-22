import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SearchBar.css';

export default class SearchBar extends Component {
 state={
     value: ''
 }
 timeout = null;

 doSearch = (e) => {
     this.setState({value : e.target.value})
     clearTimeout(this.timeout);
     this.timeout = setTimeout( () => {
      this.props.callback(this.state.value)   
     }, 500);
 }
    render(){
        return (
            <div className="search-box">
            
            <FontAwesomeIcon icon="search" className="fa" size="2x" />
            
             <input placeholder="search movie.." type="search" className="search rounded"
             onChange={this.doSearch}
             value={this.state.value}/>
             </div>
            
        )
    }
}