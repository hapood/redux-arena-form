import { ARENA_SCENE_SET_STATE } from "redux-arena/actionTypes";
import { SET_FORM_VALUE } from "./actionTypes";

export function setFormValue(fieldArray, value) {
  return {
    type: SET_FORM_VALUE,
    fieldArray,
    value
  };
}
