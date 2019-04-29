import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getListContents(action) {
    
    try {
        console.log(action.payload);

        const getResponse = yield axios.get(`/listcontents/${action.payload}`);
      console.log(getResponse.data)
        yield put ({type: "DISPLAY_LIST_CONTENTS", payload: getResponse.data});
      } catch (error) {
        console.log(`Couldn't get lists`, error);
        alert(`Sorry, couldn't get the lists. Try again later`);
      }
  }

  function* getListsSaga() {
    yield takeLatest("GET_LIST_CONTENTS", getListContents);
  }
  
  export default getListsSaga;
