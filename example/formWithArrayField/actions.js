import { ARENA_SCENE_SET_STATE } from "redux-arena/actionTypes";
import { SET_FORM_VALUE } from "./actionTypes";

export function setFormValue(fieldArray, value) {
  return {
    type: SET_FORM_VALUE,
    fieldArray,
    value
  };
}

export function setFormData(formData) {
  return {
    type: ARENA_SCENE_SET_STATE,
    state: {
      formData
    }
  };
}
