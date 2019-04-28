import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* addToCollection(action) {
    try {
        console.log(action.payload);
        
     yield axios.post(`/addmovie`, action.payload);
      alert(" Release successfully added to collection");
    } catch (error) {
      console.log(`Couldn't add release`, error);
      alert(`Sorry, couldn't add release. Try again later`);
    }
  }

  function* addToCollectionSaga() {
    yield takeLatest("ADD_TO_LIST", addToCollection);
  }
  
  export default addToCollectionSaga;