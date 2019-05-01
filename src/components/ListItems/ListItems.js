import React, { Component } from "react";
import {connect} from 'react-redux';

class ListItems extends Component {

  handleClick = () => {
   
  window.location = `#/list?id=${this.props.item.id}`;

  }

  handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this list?")){
    this.props.dispatch({
      type: "DELETE_LIST",
      payload: this.props.item.id
    })
    window.location.reload();
    }
    else return
  }

  render() {
    return (
        <tr onClick={this.handleClick} key={this.props.item.id}>
        <td>{this.props.item.list_name}</td>
        <td><button onClick={this.handleDelete}>Delete List</button></td>
      </tr>
    );
  }
}

const mapStateToProps = state => ({
    movieSearchResults: state.movieSearchResults,
  });
export default connect(mapStateToProps)(ListItems);


