import R from "ramda";

export default function(props) {
  return R.omit(
    [
      "raf_formData",
      "raf_validator",
      "raf_asyncValidator",
      "raf_location",
      "raf_errorLocation",
      "raf_setFormValue",
      "raf_errorData",
      "raf_setErrorValue",
      "_actions",
      "_locationArray",
      "_errorLocationArray",
      "dispatch"
    ],
    props
  );
}
