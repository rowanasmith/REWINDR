import React, { Component } from "react";
import {connect} from 'react-redux';

class MovieSearchResultItem extends Component {

  handleClick = () => {
    console.log('hooooooptie');
    
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