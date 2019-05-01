import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* deleteListItem(action) {
    try {
      yield axios.delete(`/listitem/${action.payload}`);
    } catch (error) {
      console.log(`Couldn't delete the item`, error);
      alert(`Sorry, couldn't delete the item. Try again later`);
    }
  }


  function* deleteListItemSaga() {
    yield takeLatest("DELETE_LIST_ITEM", deleteListItem);
  }
  
  export default deleteListItemSaga;