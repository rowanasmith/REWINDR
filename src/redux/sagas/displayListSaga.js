import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* displayList(action) {
    try {
        console.log(action.payload);
        
      const getResponse = yield axios.get(`/list/${action.payload}`);
  
      yield put({type: "SET_LIST", payload: getResponse.data });
    } catch (error) {
      console.log(`Couldn't get list`, error);
      alert(`Sorry, couldn't get the list. Try again later`);
    }
  }

  function* movieSearchSaga() {
    yield takeLatest("DISPLAY_LIST", displayList);
  }
  
  export default movieSearchSaga;