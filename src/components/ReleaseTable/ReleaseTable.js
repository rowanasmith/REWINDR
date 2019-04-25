import React, { Component } from 'react';
import {connect} from 'react-redux';



class ReleaseTable extends Component {
    render() {
        return(

      <div>
      <h1>
          Releases
      </h1>
      <button onClick={this.addNew}>Add New Release</button>
      <table>
          <thead>
              <th>Image</th>
              <th>Company</th>
              <th>Release Year</th>
              <th>Catalog Number</th>
          </thead>
          <tbody>

          </tbody>
      </table>
  </div>
  )
}
}
const mapStateToProps = state => ({
    currentMovieReducer: state.currentMovieReducer,
  });
export default connect(mapStateToProps)(ReleaseTable);