import React, { Component } from 'react';
import Movies from '../component/Movies';
import Preloader from '../component/Preloader';
import Search from '../component/Search';

export default class Main extends Component {
  state = {
    movies: [],
    loading: true
  };
  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=f296da7b&s=avengers')
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  }
  searchFilm = (str, type = 'all') => {
    this.setState({loading: true})
    fetch(
      `http://www.omdbapi.com/?apikey=f296da7b&s=${str}${type !== 'all' ? `&type=${type}` : ''}`
      )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  };
  render() {
    const { movies, loading } = this.state;
    return (
      <main className='container content'>
        <Search searchFilm={this.searchFilm} />
        {loading ? <Preloader /> : <Movies movies={movies} />}
      </main>
    );
  }
}