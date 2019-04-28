import React, { Component } from "react";
import {connect} from 'react-redux';

class ListItems extends Component {

  handleClick = () => {
    this.props.dispatch({
      type: "GET_LIST_CONTENTS",
      payload: this.props.item.id,
  });    
  window.location = `#/list`;

  }


  render() {
    return (
        <tr onClick={this.handleClick} key={this.props.item.id}>
        <td>{this.props.item.list_name}</td>
      </tr>
    );
  }
}

const mapStateToProps = state => ({
    movieSearchResults: state.movieSearchResults,
  });
export default connect(mapStateToProps)(ListItems);


