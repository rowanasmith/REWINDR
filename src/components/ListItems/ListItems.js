import React, { Component } from "react";
import {connect} from 'react-redux';

class ListItems extends Component {

  handleClick = () => {
   
  window.location = `#/list?id=${this.props.item.id}`;

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


