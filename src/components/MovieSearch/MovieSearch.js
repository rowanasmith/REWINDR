import React, { Component } from 'react';
import MovieSearchResults from '../MovieSearchResults/MovieSearchResults'
import {connect} from 'react-redux';
import './MovieSearch.css'


class MovieSearch extends Component {


    state = {
      search: ''
    }

    handleChange =  event => {
      this.setState({
        search: event.target.value
        })
        
    };
  
    //this will send a request to the api based on the input in the
    //text field
    getMovie = () => {

        console.log(this.state.search);
        this.props.dispatch({
            type: "MOVIE_SEARCH",
            payload: this.state.search,
        });
    }
        

  render() {
    return (
      <div className="App">
        <h1>Search for a Movie!</h1>
        <img className="vhs" src="https://cdn.freebiesupply.com/logos/large/2x/vhs-logo-png-transparent.png" alt="vhs"></img>

        <div className="search">
        <input placeholder="Movie Title" value={this.search} onChange={this.handleChange} ></input>
        <button onClick={this.getMovie}>Search</button>
        </div>
        <MovieSearchResults />
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
})
export default connect(mapReduxStateToProps)(MovieSearch);
