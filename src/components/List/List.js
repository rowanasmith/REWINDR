import React, { Component } from 'react';
import {connect} from 'react-redux';




class List extends Component {


  render() {
      if (this.props.reduxState.listContentReducer === 'State'){
    return (
      <div></div>
    )}
    else return(
      <div className="App">
        <header>
        <h1></h1>
        <h3>List Contents: </h3>
        </header>
        <table className="table">
          <thead>
            <tr><th>Poster</th><th>Title</th><th>Year</th></tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    );
  }


}
const mapStateToProps = reduxState => ({
  reduxState
});

export default connect(mapStateToProps)(List);
