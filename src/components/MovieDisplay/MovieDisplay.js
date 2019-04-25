import React, { Component } from 'react';
import {connect} from 'react-redux';
import styles from './MovieDisplay.css';
import ReleaseTable from '../ReleaseTable/ReleaseTable'



class MovieDisplay extends Component {

    addNew = () => {
        window.location = "#/newrelease";

    }

    renderPage = () => {
        if (this.props.currentMovieReducer[0] === 'State'){
      return (
          <div>
          </div>
      )}
      else return(

        <div className="MovieDisplay">
          <header>
          <h1>{this.props.currentMovieReducer.Title}</h1>
          <img className="displayPoster" src={`${this.props.currentMovieReducer.Poster}`} alt='Poster'></img>
          <h2>Rating: {this.props.currentMovieReducer.Rated}</h2>
          <h3>Released: {this.props.currentMovieReducer.Released}</h3>
          <h3>Runtime: {this.props.currentMovieReducer.Runtime}</h3>
          <h3>{this.props.currentMovieReducer.Genre}</h3> 
          </header>
          <div>
              <p>Director: {this.props.currentMovieReducer.Director}</p>
              <p>Written By: {this.props.currentMovieReducer.Writer}</p>
              <p>Starring: {this.props.currentMovieReducer.Actors}</p>
              <p>{this.props.currentMovieReducer.Plot}</p>
          </div>
        </div>
      );
      }

    

  render() {
      return(

          <div>
      {this.renderPage()}
      <ReleaseTable />
      </div>
      )}
}

const mapStateToProps = state => ({
    currentMovieReducer: state.currentMovieReducer,
  });
export default connect(mapStateToProps)(MovieDisplay);
