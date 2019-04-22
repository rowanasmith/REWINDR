import React, { Component } from 'react';
import axios from 'axios';
import MovieSearchResults from '../MovieSearchResults/MovieSearchResults'
import {connect} from 'react-redux';


class MovieSearch extends Component {


    state = {
      search: ''
    }

    handleChange =  event => {
      this.setState({
        search: event.target.value
        })
        
    };
  
    getMovie = () => {
    let urlVar = `http://www.omdbapi.com/?apikey=815b3236&s=${this.state.search}`;
    axios({
        method: 'GET',
        url: urlVar,
    })
    .then( (response) => {
      this.setState({
        search: response.data,
      })
      this.sendResults();
      })      
  }
  
  sendResults = () => {
    const action = {type: 'SET_SEARCH_RESULTS', payload: this.state.search}
    this.props.dispatch(action)
  }

  render() {
    return (
      <div className="App">
        <h1>Search for a Movie!</h1>
        <input placeholder="Movie Title" value={this.search} onChange={this.handleChange} ></input>
        <button onClick={this.getMovie}>Search</button>
        <MovieSearchResults />
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
})
export default connect(mapReduxStateToProps)(MovieSearch);
