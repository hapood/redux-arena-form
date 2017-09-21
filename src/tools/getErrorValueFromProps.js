export default function(props, defaultValue = null) {
  return props.raf_errorData && props._errorLocationArray
    ? props.raf_errorData.getIn(props._errorLocationArray)
    : defaultValue;
}
