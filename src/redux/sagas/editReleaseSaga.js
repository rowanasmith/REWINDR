import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* editRelease(action) {
    
    try {
        console.log(action.payload);

            yield axios.put(`/editrelease`, action.payload);
        alert("Release updated successfully")
      } catch (error) {
        console.log(`Couldn't edit release`, error);
        alert(`Sorry, couldn't edit release. Try again later`);
      }
  }

  function* editReleaseSaga() {
    yield takeLatest("EDIT_RELEASE", editRelease);
  }
  
  export default editReleaseSaga;
