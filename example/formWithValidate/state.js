import Immutable from "immutable";

export default {
  formData: Immutable.fromJS({
    message: "hello world",
    isEnabled: false,
    priority: "low",
    sendTo: ["Lily"]
  }),
  errorData:Immutable.fromJS({})
};
