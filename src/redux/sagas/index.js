import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import movieSearchSaga from './movieSearchSaga';
import currentMovieSaga from './currentMovieSaga';
import newReleaseSaga from './newReleaseSaga';
import getReleasesSaga from './getReleasesSaga';
import getListsSaga from './getListsSaga';
import addNewListSaga from './addNewListSaga'
import displayListSaga from './displayListSaga';
import addToCollectionSaga from './addToCollectionSaga'

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    movieSearchSaga(),
    currentMovieSaga(),
    newReleaseSaga(),
    getReleasesSaga(),
    getListsSaga(),
    addNewListSaga(),
    displayListSaga(),
    addToCollectionSaga(),
  ]);
}
