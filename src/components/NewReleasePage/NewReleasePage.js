import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const mapStateToProps = reduxState => ({
  reduxState
});

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

class NewReleasePage extends Component {
  state = {
    newRelease: {
      name: "",
      description: "",
      thumbnail: "",
      website: "",
      github: "",
      date_completed: "",
      tag_id: ""
    }
  };

  //This will get the tags you will need to choose from
  //from the tag reducer
  componentDidMount = () => {
    this.props.dispatch({ type: "GET_TAGS" });
  };

  //this will update the state as the input forms are changed
  handleChange = propertyName => event => {
    this.setState({
      newProject: {
        ...this.state.newProject,
        [propertyName]: event.target.value
      }
    });
  };

  //this function will send the state to get caught by
  //saga and eventually post to the db as well as clear
  //all input fields
  addNewProject = event => {
    event.preventDefault();
    this.props.dispatch({
      type: "ADD_PROJECT",
      payload: this.state.newProject
    });
    this.setState({
      newProject: {
        id: "",
        name: "",
        description: "",
        thumbnail: "",
        website: "",
        github: "",
        date_completed: "",
        tag_id: ""
      }
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            label="Name (Required)"
            className={classes.textField}
            value={this.state.newProject.name}
            onChange={this.handleChange("name")}
            margin="normal"
          />

          <TextField
            label="Description"
            className={classes.textField}
            value={this.state.newProject.description}
            onChange={this.handleChange("description")}
            margin="normal"
          />

          <TextField
            label="Thumbnail"
            className={classes.textField}
            value={this.state.newProject.thumbnail}
            onChange={this.handleChange("thumbnail")}
            margin="normal"
          />

          <TextField
            label="Website"
            className={classes.textField}
            value={this.state.newProject.website}
            onChange={this.handleChange("website")}
            margin="normal"
          />

          <TextField
            label="Github"
            className={classes.textField}
            value={this.state.newProject.github}
            onChange={this.handleChange("github")}
            margin="normal"
          />

          <TextField
            label="Date Completed (Required)"
            type="date"
            value={this.state.newProject.date_completed}
            className={classes.textField}
            onChange={this.handleChange("date_completed")}
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
          />

          <TextField
            select
            label="Select A Tag (Required)"
            className={classes.textField}
            value={this.state.newProject.tag_id}
            onChange={this.handleChange("tag_id")}
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
            margin="normal"
          >
            {this.props.reduxState.tags.map(tags => (
              <MenuItem key={tags.id} value={tags.id}>
                {tags.name}
              </MenuItem>
            ))}
          </TextField>

          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={this.addNewProject}
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(withStyles(styles)(NewReleasePage));
