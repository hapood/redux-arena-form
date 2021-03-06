import React, { Component } from "react";
import TextField from "material-ui/TextField";
import {
  omitHOCProps,
  willMountBuilder,
  willReceivePropsBuilder,
  getValueFromProps,
  getErrorValueFromProps
} from "redux-arena-form/core";

function valuePumper(e, value) {
  return value;
}

export default class TextFieldHOC extends Component {
  componentWillMount = willMountBuilder(valuePumper);
  componentWillReceiveProps = willReceivePropsBuilder(valuePumper);

  render() {
    return (
      <TextField
        value={getValueFromProps(this.props)}
        errorText={getErrorValueFromProps(this.props)}
        onChange={this.state.onChange}
        {...omitHOCProps(this.props)}
      />
    );
  }
}
