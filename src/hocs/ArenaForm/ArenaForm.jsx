import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ArenaForm extends Component {
  static propTypes = {
    formData: PropTypes.object.isRequired,
    setFormValue: PropTypes.func.isRequired,
    errorData: PropTypes.object,
    setErrorValue: PropTypes.func,
    children: PropTypes.element.isRequired
  };

  componentWillMount() {
    let {
      formData,
      setFormValue,
      errorData,
      setErrorValue,
      actions
    } = this.props;
    actions.setState({
      raf_formData: formData,
      raf_setFormValue: setFormValue,
      raf_errorData: errorData,
      raf_setErrorValue: setErrorValue
    });
  }

  componentWillReceiveProps(nextProps) {
    let {
      formData,
      setFormValue,
      errorData,
      setErrorValue,
      actions,
      onChange
    } = nextProps;
    if (
      formData !== this.props.formData ||
      setFormValue !== this.props.setFormValue ||
      errorData !== this.props.errorData ||
      setErrorValue !== this.props.setErrorValue
    ) {
      actions.setState({
        raf_formData: formData,
        raf_setFormValue: setFormValue,
        raf_errorData: errorData,
        raf_setErrorValue: setErrorValue
      });
    }
  }

  render() {
    if (this.props.raf_formData) {
      return this.props.children;
    } else return <div />;
  }
}
