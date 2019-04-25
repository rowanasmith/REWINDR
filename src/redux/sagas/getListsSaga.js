import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getLists(action) {
    
    try {
        console.log(action.payload);

            const getResponse = yield axios.get(`/lists/${action.payload}`);

        yield put ({type: "SET_LISTS", payload: getResponse.data});
      } catch (error) {
        console.log(`Couldn't get lists`, error);
        alert(`Sorry, couldn't get the lists. Try again later`);
      }
  }

  function* getReleasesSaga() {
    yield takeLatest("GET_LISTS", getLists);
  }
  
  export default getListsSaga;
