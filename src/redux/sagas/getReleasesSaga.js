import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getReleases(action) {
    
    try {
        console.log(action.payload);

            const getResponse = yield axios.get(`/releases/${action.payload}`);

        yield put ({type: "SET_RELEASES", payload: getResponse.data});
      } catch (error) {
        console.log(`Couldn't get releases`, error);
        alert(`Sorry, couldn't get the releases. Try again later`);
      }
  }

  function* getReleasesSaga() {
    yield takeLatest("GET_RELEASES", getReleases);
  }
  
  export default getReleasesSaga;
