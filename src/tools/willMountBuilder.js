export default function(valuePumper) {
  return function() {
    let {
      raf_formData,
      raf_location,
      raf_errorData,
      raf_errorLocation,
      raf_setFormValue,
      raf_setErrorValue,
      raf_validator,
      raf_asyncValidator,
      _actions
    } = this.props;
    let _errorLocationArray;
    let _locationArray = raf_location.split(".");
    if (raf_errorLocation != null) {
      _errorLocationArray = raf_errorLocation.split(".");
    } else {
      _errorLocationArray = _locationArray;
    }
    _actions.setState({ _locationArray, _errorLocationArray });
    let setErrorValue = errorValue =>
      raf_setErrorValue(_errorLocationArray, errorValue);
    if (raf_validator) {
      setErrorValue(raf_validator(raf_formData.getIn(_locationArray)));
    }
    if (raf_asyncValidator) {
      raf_asyncValidator(raf_formData.getIn(_locationArray), setErrorValue);
    }
    this.state = {
      onChange: (...args) =>
        raf_setFormValue(_locationArray, valuePumper(...args)),
      setErrorValue
    };
  };
}
