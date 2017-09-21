import ReduxArenaForm from "./ReduxArenaForm";
import state from "./state";

export default {
  Component: ReduxArenaForm,
  state,
  propsPicker: (state, actions) => ({
    raf_formData: state.raf_formData,
    actions
  }),
  options: {
    vReducerKey: "_reduxArenaForm"
  }
};
