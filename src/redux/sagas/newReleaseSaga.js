import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* newRelease(action) {
    try {
        console.log(action.payload);
        
     yield axios.post(`/newrelease`, action.payload);
      alert("New Release successfully added");
    } catch (error) {
      console.log(`Couldn't add new  release`, error);
      alert(`Sorry, couldn't add new release. Try again later`);
    }
  }

  function* newReleaseSaga() {
    yield takeLatest("ADD_NEW_RELEASE", newRelease);
  }
  
  export default newReleaseSaga;