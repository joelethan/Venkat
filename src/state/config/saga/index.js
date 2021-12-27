import { all } from "redux-saga/effects";
import dataSaga from "./dataSaga";

export default function* root() {
  yield all([...dataSaga]);
}
