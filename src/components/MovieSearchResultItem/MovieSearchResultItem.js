import React, { Component } from "react";
import {connect} from 'react-redux';
import './MovieSearchResultItem.css'

class MovieSearchResultItem extends Component {

  //clicking on a table item will take you to the movie's specific page
  handleClick = () => {
   
  window.location = `#/movie?id=${this.props.item.imdbID}`;

  }


  render() {
    return (
        <tr onClick={this.handleClick} key={this.props.item.imdbID}>
        <td><img className="poster" src={`${this.props.item.Poster}`} alt='Poster'></img></td>
        <td>{this.props.item.Title}</td>
        <td>{this.props.item.Year}</td>
      </tr>
    );
  }
}

const mapStateToProps = state => ({
    movieSearchResults: state.movieSearchResults,
  });
export default connect(mapStateToProps)(MovieSearchResultItem);