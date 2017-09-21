export default function(props, defaultValue = "") {
  return props._locationArray
    ? props.raf_formData.getIn(props._locationArray)
    : defaultValue;
}
