import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch} from '@fortawesome/free-solid-svg-icons';


import { API_KEY, API_URL, BASE_IMG_URL, BACKDROP_SIZE, POSTER_SIZE } from '../../config';
import Header from '../sharedComponents/Header/Header';
import Home from '../Home/Home';

library.add(faSearch);
class App extends Component {
  state={
    movies: [],
    heroImage: null,
    loading: false,
    currentPage: 0,
    totalPages: 0,
    searchTerm: ''
  }

  componentDidMount(){
    this.setState({
      loading: true
    });

    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    this.fetchItems(endpoint);
  }

  fetchItems = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.setState({
        movies: [...this.state.movies, ...data.results],
        heroImage: this.state.heroImage || data.results[Math.floor(Math.random() *15)],
        loading: false,
        currentPage: data.page,
        totalPages: data.total_pages
      })
    })
  }
  loadMoreItems = () => {
    let endpoints = '';
    this.setState({ loading: true});

    if(this.state.searchTerm === ''){
      endpoints = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage + 1}`;
    }else{
      endpoints = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${this.state.searchTerm}`;
    }
    this.fetchItems(endpoints);
  }
  

  searchItems = (searchTerm) => {
    console.log(searchTerm);
    let endpoint = '';
    this.setState({
      movies: [],
      loading: true,
      searchTerm
    })

    if(searchTerm === ''){
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    }else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${this.state.searchTerm}`;
    }
    this.fetchItems(endpoint);
  }
  render() {
    return (
      <div className="App">
        <Header callback={this.searchItems}/>
        {this.state.heroImage ? 
        <Home hero={this.state.heroImage} imageUrl={BASE_IMG_URL} imageSize={POSTER_SIZE} movies={this.state.movies} header={this.state.searchTerm} loading={this.state.loading} onClick={this.loadMoreItems} load={this.state.loading}/> : 
        <Home imageUrl={BASE_IMG_URL} imageSize={POSTER_SIZE} movies={this.state.movies} onClick={this.loadMoreItems} load={this.state.loading}/> }
      </div>
    );
  }
}

export default App;
