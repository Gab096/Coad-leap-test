import { takeLatest, all, call, put } from "redux-saga/effects";
import Types from "./types";
import api from "../../../services/api";
import { setApiData, onSuccessDeletePost, createPostSuccess } from "./actions";

export function* requestApiData() {
  const response = yield call(api.get, "/careers");
  const res = response.data;
  yield put(setApiData(res.results));
}

export function* createPost({ data }) {
  try {
    const response = yield call(api.post, "/careers/", data);

    yield put(createPostSuccess(response.data));
  } catch (error) {}
}
export function* deletePost({ id }) {
  try {
    yield call(api.delete, `/careers/${id}/`);
    yield put(onSuccessDeletePost(id));
  } catch (error) {}
}
export function* editPost({ editdata, id }) {
  try {
    console.log(editdata, id);
    yield call(api.patch, `/careers/${id}/`, editdata);
  } catch (error) {}
}

export default all([
  takeLatest(Types.REQUEST_API_DATA, requestApiData),
  takeLatest(Types.UI_POST_REQUEST, createPost),
  takeLatest(Types.DELETE_POST, deletePost),
  takeLatest(Types.EDIT_POST, editPost),
]);
