/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { fork, put, takeLatest } from "redux-saga/effects";
import { dataActions } from "../../actions";

function* fetchData() {
  try {
    const response = yield axios({
      url: "https://fakestoreapi.com/products",
      method: "GET",
    });

    yield put({
      type: dataActions.FETCH_DATA_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    yield put({
      type: dataActions.FETCH_DATA_ERROR,
      error: error.data,
    });
  }
}

function* watchFetchData() {
  yield takeLatest(dataActions.FETCH_DATA_REQUEST, fetchData);
}

export default [fork(watchFetchData)];
