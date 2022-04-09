import Types from "./types";

export function requestApiData() {
  return { type: Types.REQUEST_API_DATA };
}
export function setApiData(data) {
  return { type: Types.SET_API_DATA, data };
}
export function uiDeletePost(id) {
  return { type: Types.DELETE_POST, id };
}
export function onSuccessDeletePost(id) {
  return { type: Types.ON_SUCCESS_DELETE_POST, id };
}
export function uiEditPost(editdata, id) {
  return { type: Types.EDIT_POST, editdata, id };
}
export function uiPostRequest(data) {
  return { type: Types.UI_POST_REQUEST, data };
}
export function createPostSuccess(data) {
  return { type: Types.CREATE_POST_SUCCESS, data };
}
