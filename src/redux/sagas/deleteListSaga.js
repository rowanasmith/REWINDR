import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* deleteList(action) {
    try {
      yield axios.delete(`/deletelist/${action.payload}`);
    } catch (error) {
      console.log(`Couldn't delete the item`, error);
      alert(`Sorry, couldn't delete the item. Try again later`);
    }
  }


  function* deleteListSaga() {
    yield takeLatest("DELETE_LIST", deleteList);
  }
  
  export default deleteListSaga;