import { ARENA_SCENE_SET_STATE } from "redux-arena/actionTypes";
import { SET_FORM_VALUE, SET_ERROR_VALUE } from "./actionTypes";

export function setFormValue(fieldArray, value) {
  return {
    type: SET_FORM_VALUE,
    fieldArray,
    value
  };
}

export function setErrorValue(fieldArray, value) {
  return {
    type: SET_ERROR_VALUE,
    fieldArray,
    value
  };
}
