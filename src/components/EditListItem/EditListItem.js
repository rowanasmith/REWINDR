import React, { Component } from "react";
import { connect } from "react-redux";


const mapStateToProps = reduxState => ({
  reduxState
});


class EditRelease extends Component {





  state = {
    release: {
      user_notes: "",
    }
  };

  //this will update the state as the input forms are changed
  handleChange = event => {

    let propertyName = event.target.getAttribute('name');

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
    let releasePayload = this.state.release;

    releasePayload = {
      ...releasePayload,
      release_id: this.props.reduxState.currentReleaseReducer.id
    }

    this.props.dispatch({
      type: "EDIT_LIST_ITEM",
      payload: releasePayload
    });
    window.location = `#/movie?id=${this.props.reduxState.currentMovieReducer.imdbID}`;

  };

  render() {
    return (
      <div>
        <h1>Edit this Item!</h1>
        <img className="center" src={`${this.props.reduxState.currentReleaseReducer.image_url}`} alt='Poster'></img>
        <form>
        <br />
            <label>User Notes:</label>
            <input type="text" onChange={this.handleChange}  name="user_notes" value={this.state.release.company} placeholder="Release Company (Required)" ></input>
            <br />
            <button onClick={this.editRelease}>Edit Item</button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(EditRelease);
