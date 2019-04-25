import React, { Component } from 'react';
import {connect} from 'react-redux';



class DisplayMyLists extends Component {

    componentDidMount(){
        this.getLists();
    }

    getLists = () => {
        this.props.dispatch({
            type: "GET_LISTS",
            payload: this.props.user.id
        });
    }

    addNew = () => {
        window.location = "#/newlist";

    }

    renderPage = () => {
        if (this.props.setListsReducer[0] === 'State'){
      return (
          <div>
          </div>
      )}
      else return(
        <div>
        <h1>
            My Lists
        </h1>
        <table>
            <thead>
                <tr>
                <th>List Name</th>
                <th>Number of Items</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    </div>
    )
    }

    render() {
        return(
            <div>
            <button onClick={this.addNew}>Add New List</button>

            {this.renderPage()}
            </div>
        )
      
}
}
const mapStateToProps = state => ({
    currentMovieReducer: state.currentMovieReducer,
    releasesReducer: state.releasesReducer,
    setListsReducer: state.setListsReducer,
    user: state.user
  });
export default connect(mapStateToProps)(DisplayMyLists);