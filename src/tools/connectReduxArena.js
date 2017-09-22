import { bundleToComponent } from "redux-arena/helper";

export default function(Component) {
  return bundleToComponent({
    Component,
    state: {
      locationArray: null,
      errorLocationArray: null
    },
    propsPicker: (state, actions, allState, { _arenaForm }) => ({
      _actions: actions,
      _locationArray: state._locationArray,
      _errorLocationArray: state._errorLocationArray,
      raf_formData: allState[_arenaForm.reducerKey].raf_formData,
      raf_setFormValue: allState[_arenaForm.reducerKey].raf_setFormValue,
      raf_errorData: allState[_arenaForm.reducerKey].raf_errorData,
      raf_setErrorValue: allState[_arenaForm.reducerKey].raf_setErrorValue
    })
  });
}
