import React, { Component } from "react";
import { connect } from "react-redux";


const mapStateToProps = reduxState => ({
  reduxState
});

class NewListForm extends Component {
  state = {
    newList: {
    list_name: ``,
    user_id: `${this.props.reduxState.user.id}`

    }
  };

  

  //this will update the state as the input forms are changed
  handleChange = propertyName => event => {
    this.setState({
      newList: {
        ...this.state.newList,
        [propertyName]: event.target.value
      }
    });
  };

  addNewRelease = () => {
    this.props.dispatch({
      type: "ADD_NEW_LIST",
      payload: this.state.newList
    });
  };

  render() {
    return (
      <div>
        <h1>Add a New List!</h1>
        <form>
            <input type="text" onChange={this.handleChange("list_name")} value={this.state.newList.list_name} placeholder="List Name (Required)"></input>
            
            <button onClick={this.addNewRelease}>Add New List</button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(NewListForm);
