import React, { Component } from "react";
import { connect } from "react-redux";


const mapStateToProps = reduxState => ({
  reduxState
});


class EditRelease extends Component {





  state = {
    release: {
      release_id: "",
      company: "",
      release_year: "",
      release_notes: "",
      catalog_number: "",
      release_title: "",
    }
  };

  componentDidMount(){
    this.setState({
      release: {
        ...this.state.release,
      release_id: this.props.reduxState.currentReleaseReducer.id

      }
    })
  }

  //this will update the state as the input forms are changed
  handleChange = propertyName => event => {
    this.setState({
      release: {
        ...this.state.release,
        [propertyName]: event.target.value
      }
    });
  };

  //this function will send the state to get caught by
  //saga and eventually post to the db as well as clear
  //all input fields
  editRelease = () => {
    this.props.dispatch({
      type: "EDIT_RELEASE",
      payload: this.state.release
    });
    window.location = `#/movie?id=${this.props.reduxState.currentMovieReducer.imdbID}`;

  };

  render() {
    return (
      <div>
        <h1>Edit this relase!</h1>
        <img className="center" src={`${this.props.reduxState.currentReleaseReducer.image_url}`} alt='Poster'></img>
{JSON.stringify(this.state)}
        <form>
        <br />
            <label>Company:</label>
            <input type="text" onChange={this.handleChange("company")}  value={this.state.release.company} placeholder="Release Company (Required)" ></input>
            <br/>
            <label>Release Title:</label>
            <input type="text" onChange={this.handleChange("release_title")} value={this.state.release.release_title} placeholder="Release Title (Required)"></input>
            <br />
            <label>Release Year:</label>
            <input type="text" onChange={this.handleChange("release_year")} value={this.state.release.release_year} placeholder="Release Year (Required)"></input>
            <br />
            <label>Release Notes:</label>
            <input type="text" onChange={this.handleChange("release_notes")} value={this.state.release.release_notes} placeholder="Release Notes"></input>
            <br />
            <label>Catalog #: </label>
            <input type="text" onChange={this.handleChange("catalog_number")} value={this.state.release.catalog_number} placeholder="Catalog Number"></input>
            <br />
            <button onClick={this.editRelease}>Edit Release</button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(EditRelease);
