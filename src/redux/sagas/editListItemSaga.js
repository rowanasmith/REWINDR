import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* editListItem(action) {
    
    try {
        console.log(action.payload);

        yield axios.put(`/editlistitem`, action.payload);
        alert("Release updated successfully")
        
      } catch (error) {
        console.log(`Couldn't edit release`, error);
        alert(`Sorry, couldn't edit release. Try again later`);
      }
  }

  function* editListItemSaga() {
    yield takeLatest("EDIT_LIST_ITEM", editListItem);
  }
  
  export default editListItemSaga;
