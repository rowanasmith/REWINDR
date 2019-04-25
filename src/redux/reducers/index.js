import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import movieSearchResults from './movieSearchReducer';
import currentMovieReducer from './currentMovieReducer';
import releasesReducer from './releasesReducer'

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  releasesReducer, //this will gather all the releases of a specified movie from the database
  movieSearchResults, //will store the results from an API GET request
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  currentMovieReducer, //will store the IMDB ID of whatever movie from the search results is clicked on
});

export default rootReducer;
