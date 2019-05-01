import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import movieSearchResults from './movieSearchReducer';
import currentMovieReducer from './currentMovieReducer';
import releasesReducer from './releasesReducer'
import setListsReducer from './setListsReducer';
import addToListReducer from './addToListReducer';
import listContentReducer from './listContentReducer'
import currentReleaseReducer from './displayCurrentReleaseReducer'

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  currentReleaseReducer, //this holds the specified release to allow it to be edited
  listContentReducer, //this will hold all the rows specified to the chosen list.
  addToListReducer, //this will store data about a specific release that can then be sent to the list item db
  setListsReducer, //this will pull all the user's lists from the db and display them
  releasesReducer, //this will gather all the releases of a specified movie from the database
  movieSearchResults, //will store the results from an API GET request
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  currentMovieReducer, //will store the IMDB ID of whatever movie from the search results is clicked on
});

export default rootReducer;
