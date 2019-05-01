import React, { Component } from "react";
import {connect} from 'react-redux';
import './ReleasesTableItem.css'

class MovieSearchResultItem extends Component {

    addToCollection = () => {
        this.props.dispatch({
            type: "ADD_TO_COLLECTION",
            payload: this.props.item
          });
          window.location = `#/addtolist`;

    }

    editRelease = () => {
      this.props.dispatch({
        type: "SET_CURRENT_RELEASE",
        payload: this.props.item.id
      })
      window.location = `#/editrelease`
    }


  render() {
    return (
        <tr>
        <td><img className="releaseposter" src={`${this.props.item.image_url}`} alt='Poster'></img></td>
        <td>{this.props.item.company}</td>
        <td>{this.props.item.release_year}</td>
        <td>{this.props.item.release_notes}</td>
        <td>{this.props.item.catalog_number}</td>
        <td><button onClick={this.editRelease}>Edit This Release</button></td>
        <td><button onClick={this.addToCollection}>Add To Collection</button></td>

      </tr>
    );
  }
}

const mapStateToProps = state => ({
    movieSearchResults: state.movieSearchResults,
  });
export default connect(mapStateToProps)(MovieSearchResultItem);