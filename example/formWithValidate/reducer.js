import initState from "./state";
import { SET_FORM_VALUE, SET_ERROR_VALUE } from "./actionTypes";

export default function(state = initState, action) {
  switch (action.type) {
    case SET_FORM_VALUE:
      return Object.assign({}, state, {
        formData: state.formData.setIn(action.fieldArray, action.value)
      });
    case SET_ERROR_VALUE:
      return Object.assign({}, state, {
        errorData: state.errorData.setIn(action.fieldArray, action.value)
      });
    default:
      return state;
  }
}
