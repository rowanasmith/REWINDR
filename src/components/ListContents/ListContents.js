import React, { Component } from "react";
import {connect} from 'react-redux';

class ListContents extends Component {

  //this will dispatch a delete request to the server after the user
  //confirms their choice after clicking the delete button
    handleDelete = () => {
        if (window.confirm("Are you sure you want to delete?")){
        this.props.dispatch({
          type: "DELETE_LIST_ITEM",
          payload: this.props.item.id
        })
        window.location.reload();
        }
        else return
      }
      
      //this will send a request to get and store the current chosen release
      //in a reducer, then take the user to the edit page
      handleEdit = () => {
        this.props.dispatch({
          type: "SET_CURRENT_RELEASE",
          payload: this.props.item.release_id,
        }); 
        window.location = `#/editlistitem`
      }

  

  render() {
    return (
        <tr key={this.props.item.id}><td><img className="poster" src={`${this.props.item.image_url}`} alt='Poster'></img></td>
        <td>{this.props.item.release_title}</td>
        <td>{this.props.item.release_year}</td><td>{this.props.item.company}</td>
        <td>{this.props.item.release_notes}</td><td>{this.props.item.user_notes}</td>
        {/* <td><button onClick={this.handleEdit}>Edit</button></td> */}
        <td><button onClick={this.handleDelete}>Delete From List</button></td></tr>
    );
  }
}

const mapStateToProps = state => ({
    movieSearchResults: state.movieSearchResults,
  });
export default connect(mapStateToProps)(ListContents);


