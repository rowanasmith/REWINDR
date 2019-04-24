import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* currentMovie(action) {
    try {
        console.log(action.payload);
        
      const getResponse = yield axios.get(`/movie/${action.payload}`);
  
      yield put({type: "SET_CURRENT_MOVIE", payload: getResponse.data });
    } catch (error) {
      console.log(`Couldn't get movie  results`, error);
      alert(`Sorry, couldn't get the movie results. Try again later`);
    }
  }

  function* movieSearchSaga() {
    yield takeLatest("CURRENT_MOVIE", currentMovie);
  }
  
  export default movieSearchSaga;