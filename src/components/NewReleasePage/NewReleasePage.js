import React, { Component } from "react";
import { connect } from "react-redux";
import  './NewReleasePage.css'


const mapStateToProps = reduxState => ({
  reduxState
});

class NewReleasePage extends Component {
  state = {
    newRelease: {
        imdb_id: `${this.props.reduxState.currentMovieReducer.imdbID}`,
      image_url: `${this.props.reduxState.currentMovieReducer.Poster}`,
      company: "",
      release_year: "",
      release_notes: "",
      catalog_number: "",
      release_title: ""
    }
  };

  

  //this will update the state as the input forms are changed
  handleChange = propertyName => event => {
    this.setState({
      newRelease: {
        ...this.state.newRelease,
        [propertyName]: event.target.value
      }
    });
  };

  //this function will send the state to get caught by
  //saga and eventually post to the db as well as clear
  //all input fields
  addNewRelease = () => {
    this.props.dispatch({
      type: "ADD_NEW_RELEASE",
      payload: this.state.newRelease
    });
  };

  render() {
    return (
      <div>
        <h1>Add a New Release!</h1>
        <img class="center" src={`${this.props.reduxState.currentMovieReducer.Poster}`} alt='Poster'></img>

        <form>
        <br />
            <input type="text" onChange={this.handleChange("company")} value={this.state.newRelease.name} placeholder="Company (Required)"></input>
            <input type="text" onChange={this.handleChange("release_title")} value={this.state.newRelease.release_title} placeholder="Release Title (Required)"></input>
            <input type="text" onChange={this.handleChange("release_year")} value={this.state.newRelease.release_year} placeholder="Release Year (Required)"></input>
            <input type="text" onChange={this.handleChange("release_notes")} value={this.state.newRelease.release_notes} placeholder="Release Notes"></input>
            <input type="text" onChange={this.handleChange("catalog_number")} value={this.state.newRelease.catalog_number} placeholder="Catalog Number"></input>
            <button onClick={this.addNewRelease}>Add New Release</button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(NewReleasePage);
