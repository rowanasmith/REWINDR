import React, { Component } from 'react';
import {connect} from 'react-redux';
import ListItems from '../ListItems/ListItems';



class DisplayMyLists extends Component {

    componentDidMount(){
        this.getLists();
    }


//This will gather all the lists associated with the user and store them in
//a reducer
    getLists = () => {
        this.props.dispatch({
            type: "GET_LISTS",
            payload: this.props.user.id
        });
    }

    //this will take you to the page that allows you to create
    //a new list
    addNew = () => {
        window.location = "#/newlist";

    }

    renderPage = () => {

        //this turnary will prevent the page from loading before the lists are
        //put into the reducer
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
                </tr>
            </thead>
            <tbody>
            {this.props.setListsReducer.map(item => 
              (<ListItems item={item} key={item.id}/>)
            )}
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