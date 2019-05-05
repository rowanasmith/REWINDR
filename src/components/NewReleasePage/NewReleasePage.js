import React, { Component } from "react";
import { connect } from "react-redux";
import "./NewReleasePage.css";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { white } from "material-ui/styles/colors";


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
    marginRight: theme.spacing.unit
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
      imdb_id: `${this.props.reduxState.currentMovieReducer.imdbID}`,
      image_url: `${this.props.reduxState.currentMovieReducer.Poster}`,
      company: "Turbo Force Film",
      release_year: "2018",
      release_notes: "Bootleg. Clamshell.",
      catalog_number: "#018",
      release_title: "The Amazing Mr. No Legs"
    },
    buttonClicked: false,
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

  secretButton = () => {
    this.setState({
      buttonClicked: true,
    })
  }

  //this function will send the state to get caught by
  //saga and eventually post to the db as well as clear
  //all input fields
  addNewRelease = () => {
    this.props.dispatch({
      type: "ADD_NEW_RELEASE",
      payload: this.state.newRelease
    });
    window.location = `#/movie?id=${
      this.props.reduxState.currentMovieReducer.imdbID
    }`;
    window.location.reload();
  };

  render() {
    const { classes } = this.props;
    console.log(this.state.buttonClicked)
    if (this.state.buttonClicked === false ){
    return (
      <div>
        <h1>Input New Release Information:</h1>
        <button className="secret" onClick={this.secretButton}></button>

        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            required
            id="outlined-company"
            label="Company"

            className={classes.textField}
            value={this.state.name}
            style={{backgroundColor: `white`}}

            onChange={this.handleChange("company")}
            margin="normal"
            variant="outlined"
          />

          <TextField
            required
            id="outlined-title"
            label="Release Title"
            style={{backgroundColor: `white`}}

            value={this.state.release_title}
            onChange={this.handleChange("release_title")}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-release-year"
            label="Release Year"
            value={this.state.release_year}
            style={{backgroundColor: `white`}}

            onChange={this.handleChange("release_year")}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-catalog-number"
            label="Catalog Number"
            value={this.state.catalog_number}
            style={{backgroundColor: `white`}}

            onChange={this.handleChange("catalog_number")}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-multiline-flexible"
            label="Release Notes"
            multiline
            rowsMax="4"
            style={{backgroundColor: `white`}}
            value={this.state.release_notes}
            onChange={this.handleChange("release_notes")}
            className={classes.textField}
            margin="normal"
            variant="filled"
          />
            <Button
            variant="contained"
            color="primary"

            className={classes.button}
            onClick={this.addNewRelease}
          >
            Add New Release
          </Button>
        </form>
      </div>
    );
  }
  else return (
    <div>
    <h1>Input New Release Information:</h1>
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        required
        id="outlined-company"
        label="Company"

        className={classes.textField}
        style={{backgroundColor: `white`}}
        defaultValue={"Turbo Force Film"}

        margin="normal"
        variant="outlined"
      />

      <TextField
        required
        id="outlined-title"
        label="Release Title"
        style={{backgroundColor: `white`}}

        defaultValue={"The Amazing Mr. No Legs"}
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <TextField
        required
        id="outlined-release-year"
        label="Release Year"
        value={this.state.release_year}
        style={{backgroundColor: `white`}}
        defaultValue={"2018"}
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-catalog-number"
        label="Catalog Number"
        style={{backgroundColor: `white`}}

        defaultValue={"#018"}

        className={classes.textField}
        margin="normal"
        variant="outlined"
      />

      <TextField
        id="outlined-multiline-flexible"
        label="Release Notes"
        multiline
        rowsMax="4"
        style={{backgroundColor: `white`}}
        defaultValue={"Bootleg. Clamshell"}

        className={classes.textField}
        margin="normal"
        variant="filled"
      />
        <Button
        variant="contained"
        color="primary"

        className={classes.button}
        onClick={this.addNewRelease}
      >
        Add New Release
      </Button>
      <br/>
    </form>

  </div>
);
}
  

}


export default connect(mapStateToProps)(withStyles(styles)(NewReleasePage));
