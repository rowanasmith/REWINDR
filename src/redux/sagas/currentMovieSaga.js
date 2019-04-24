import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* currentMovie(action) {
    try {
        console.log(action.payload);
          
      yield put({type: "SET_CURRENT_MOVIE", payload: action.payload });
    } catch (error) {
      console.log(`Couldn't set movie`, error);
      alert(`Sorry, couldn't set the movie. Try again later`);
    }
  }

  function* movieSearchSaga() {
    yield takeLatest("CURRENT_MOVIE", currentMovie);
  }
  
  export default movieSearchSaga;