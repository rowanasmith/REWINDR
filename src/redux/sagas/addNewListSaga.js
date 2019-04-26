import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* addNewList(action) {
    try {
        console.log(action.payload);
        
     yield axios.post(`/newlist`, action.payload);
      alert(" list successfully added ");
    } catch (error) {
      console.log(`Couldn't add list`, error);
      alert(`Sorry, couldn't add list. Try again later`);
    }
  }

  function* addNewListSaga() {
    yield takeLatest("ADD_NEW_LIST", addNewList);
  }
  
  export default addNewListSaga;