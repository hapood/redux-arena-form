import ArenaForm from "./ArenaForm";
import state from "./state";

export default {
  Component: ArenaForm,
  state,
  propsPicker: (state, actions) => ({
    raf_formData: state.raf_formData,
    actions
  }),
  options: {
    vReducerKey: "_reduxArenaForm"
  }
};
