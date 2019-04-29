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
        <h3>List Contents: </h3>
        </header>
        <table className="table">
          <thead>
            <tr><th>Poster</th><th>Title</th><th>Year</th>
            <th>Company</th><th>Release Notes</th><th>Personal Notes</th></tr>
          </thead>
          <tbody>
          {this.props.reduxState.listContentReducer.map(item => 
              (<tr key={item.id}><td><img className="poster" src={`${item.image_url}`} alt='Poster'></img></td>
              <td>{item.release_title}</td>
              <td>{item.release_year}</td><td>{item.company}</td>
              <td>{item.release_notes}</td><td>{item.user_notes}</td></tr>)
            )}
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
