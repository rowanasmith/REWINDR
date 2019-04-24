import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Axios from 'axios';



class MovieDisplay extends Component {


  render() {
      let movie = this.props.currentMovieReducer
      if (this.props.currentMovieReducer){
    return (
      <div className="App">
        <header>
        <h1>{movie.Title}</h1>
        <img className="poster" src={`${movie.Poster}`} alt='Poster'></img>
        <h2>{movie.Year}</h2>
        <h2>Rating: {movie.Rated}</h2>
        <h3>Released: {movie.Released}</h3>
        <h3>Runtime: {movie.Runtime}</h3>
        <h3>{movie.Genre}</h3> 
        </header>
        <div>
            <p>Director: {movie.Director}</p>
            <p>Written By: {movie.Writer}</p>
            <p>Starring: {movie.Actors}</p>
            <p>{movie.Plot}</p>
        </div>
      </div>
    );
    }
  
  else return [];
}

}
const mapStateToProps = state => ({
    movieSearchResults: state.movieSearchResults,
  });
export default connect(mapStateToProps)(MovieDisplay);
