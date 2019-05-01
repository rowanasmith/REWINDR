import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* setCurrentRelease(action) {
    try {
        console.log(action.payload);
        
      const getResponse = yield axios.get(`/currentrelease/${action.payload}`);
  
      yield put({type: "DISPLAY_CURRENT_RELEASE", payload: getResponse.data });
    } catch (error) {
      console.log(`Couldn't get movie  results`, error);
      alert(`Sorry, couldn't get the movie results. Try again later`);
    }
  }

  function* setCurrentReleaseSaga() {
    yield takeLatest("SET_CURRENT_RELEASE", setCurrentRelease);
  }
  
  export default setCurrentReleaseSaga;