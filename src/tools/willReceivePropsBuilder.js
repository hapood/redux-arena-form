export default function(valuePumper) {
  return function(nextProps) {
    let {
      raf_formData,
      raf_location,
      raf_errorData,
      raf_errorLocation,
      raf_setFormValue,
      raf_setErrorValue,
      raf_validator,
      raf_asyncValidator,
      _locationArray,
      _errorLocationArray,
      _actions
    } = nextProps;
    let newLocationArray;
    if (
      raf_location !== this.props.raf_location ||
      raf_setFormValue !== this.props.raf_setFormValue
    ) {
      newLocationArray = raf_location.split(".");
      _actions.setState({ _locationArray: newLocationArray });
      if (raf_errorLocation == null) {
      }
      this.state.onChange = (...args) =>
        raf_setFormValue(newLocationArray, valuePumper(...args));
    } else {
      newLocationArray = _locationArray;
    }
    let newErrorLocationArray;
    if (
      raf_errorLocation !== this.props.raf_errorLocation &&
      raf_errorLocation != null
    ) {
      newErrorLocationArray = raf_errorLocation.split(".");
      _actions.setState({
        _errorLocationArray: newErrorLocationArray
      });
    } else {
      newErrorLocationArray = newLocationArray;
      if (newErrorLocationArray !== this.props._errorLocationArray) {
        _actions.setState({
          _errorLocationArray: newLocationArray
        });
      }
    }
    if (newErrorLocationArray !== this.props._errorLocationArray) {
      this.state.setErrorValue = errorValue =>
        raf_setErrorValue(newErrorLocationArray, errorValue);
    }
    if (raf_validator) {
      this.state.setErrorValue(
        raf_validator(raf_formData.getIn(newLocationArray))
      );
    }
    if (raf_asyncValidator) {
      raf_asyncValidator(
        raf_formData.getIn(newLocationArray),
        this.state.setErrorValue
      );
    }
  };
}
