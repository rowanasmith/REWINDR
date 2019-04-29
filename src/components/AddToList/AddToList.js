import React, { Component } from "react";
import { connect } from "react-redux";
import './AddToList.css';

const mapStateToProps = reduxState => ({
  reduxState
});





class AddToList extends Component {

    getLists = () => {
        this.props.dispatch({
            type: "GET_LISTS",
            payload: this.props.reduxState.user.id
        });
    }
    
    componentDidMount(){
        this.getLists();
    };

  state = {
    newListAddition: {
        release_id: `${this.props.reduxState.addToListReducer.id}`,
        imdb_id: `${this.props.reduxState.addToListReducer.imdbID}`,
      image_url: `${this.props.reduxState.addToListReducer.Poster}`,
      company: `${this.props.reduxState.addToListReducer.company}`,
      release_year: `${this.props.reduxState.addToListReducer.release_year}`,
      release_notes: `${this.props.reduxState.addToListReducer.release_notes}`,
      catalog_number: `${this.props.reduxState.addToListReducer.catalog_number}`,
      personal_notes: "",
      list_id: "",
    }
  };

  

  //this will update the state as the input forms are changed
  handleChange = propertyName => event => {
    this.setState({
      newListAddition: {
        ...this.state.newListAddition,
        [propertyName]: event.target.value
      }
    });
  };

  //this function will send the state to get caught by
  //saga and eventually post to the db as well as clear
  //all input fields
  addNewRelease = () => {
    this.props.dispatch({
      type: "ADD_TO_LIST",
      payload: this.state.newListAddition
    });
    window.location = `#/list?id=${this.state.newListAddition.list_id}`;

  };

  render() {
    return (
      <div>        
        <h1>Add this release!</h1>
        <img class="center" src={`${this.props.reduxState.addToListReducer.image_url}`} alt='Poster'></img>

        <form className="form">
          <select value={this.state.newListAddition.list_id} onChange={this.handleChange("list_id")}>
        <option>Choose a List</option>
          {this.props.reduxState.setListsReducer.map(item => (
                <option value={item.id}>{item.list_name}</option>
            )
            )}

          </select>
            <input type="text" className="center" onChange={this.handleChange("personal_notes")} value={this.state.newListAddition.personal_notes} placeholder="Personal Notes"></input>
            <br />
            <button className="center" onClick={this.addNewRelease}>Add To List</button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(AddToList);
