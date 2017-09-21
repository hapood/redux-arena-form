import { bundleToComponent } from "redux-arena/helper";

export default function(Component) {
  return bundleToComponent({
    Component,
    state: {
      locationArray: null,
      errorLocationArray: null
    },
    propsPicker: (state, actions, allState, { _reduxArenaForm }) => ({
      _actions: actions,
      _locationArray: state._locationArray,
      _errorLocationArray: state._errorLocationArray,
      raf_formData: allState[_reduxArenaForm.reducerKey].raf_formData,
      raf_setFormValue: allState[_reduxArenaForm.reducerKey].raf_setFormValue,
      raf_errorData: allState[_reduxArenaForm.reducerKey].raf_errorData,
      raf_setErrorValue: allState[_reduxArenaForm.reducerKey].raf_setErrorValue
    })
  });
}
