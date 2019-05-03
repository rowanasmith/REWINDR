import React, { Component } from 'react';
import {connect} from 'react-redux';
import ReleasesTableItem from '../ReleasesTableItem/ReleasesTableItem'



class ReleaseTable extends Component {
    addNew = () => {
        window.location = "#/newrelease";

    }

    renderPage = () => {
        if (this.props.releasesReducer[0] === 'State'){
      return (
          <div>
          </div>
      )}
      else return(
        <div>
        <h1>
            Releases
        </h1>
        <button className="button" onClick={this.addNew}>Add New Release</button>
        <table>
            <thead>
                <tr>
                <th>Image</th>
                <th>Release Title</th>
                <th>Company</th>
                <th>Release Year</th>
                <th>Release Notes</th>
                <th>Catalog Number</th>
                </tr>
            </thead>
            <tbody>
            {this.props.releasesReducer.map(item => 
                (<ReleasesTableItem item={item} key={item.id}/>)
              )}
            </tbody>
        </table>
    </div>
    )
    }

    render() {
        return(
            <div>
            {this.renderPage()}
            </div>
        )
      
}
}
const mapStateToProps = state => ({
    currentMovieReducer: state.currentMovieReducer,
    releasesReducer: state.releasesReducer,
  });
export default connect(mapStateToProps)(ReleaseTable);