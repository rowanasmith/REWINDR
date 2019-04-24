import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* movieSearch(action) {
    try {
        console.log(action.payload);
        
      const getResponse = yield axios.get(`/movie-search/${action.payload}`);
  
      yield put({type: "SET_MOVIE_SEARCH_RESULTS", payload: getResponse.data });
    } catch (error) {
      console.log(`Couldn't get movie search results`, error);
      alert(`Sorry, couldn't get the movie search results. Try again later`);
    }
  }

  function* movieSearchSaga() {
    yield takeLatest("MOVIE_SEARCH", movieSearch);
  }
  
  export default movieSearchSaga;