import React, { Component } from 'react';
import {connect} from 'react-redux';
import ListContents from '../ListContents/ListContents'




class List extends Component {
  getUrl = () => {
    const keySplit = window.location.hash.split('=');
    const id = keySplit[1];
    this.props.dispatch({
      type: "GET_LIST_CONTENTS",
      payload: id,
    }); 
  }



  componentDidMount(){
    this.getUrl();
  }

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
              (<ListContents item={item} key={item.id}/>)
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
