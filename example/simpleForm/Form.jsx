import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import ArenaForm from "redux-arena-form";
import { TextField, Checkbox, SelectField } from "redux-arena-form-material-ui";
import MenuItem from "material-ui/MenuItem";
import Paper from "material-ui/Paper";
import Subheader from "material-ui/Subheader";
import FlatButton from "material-ui/FlatButton";

export default class Form extends Component {
  onSubmit = () => {
    alert(JSON.stringify(this.props.formData.toJS(), null, 4));
  };

  render() {
    let { formData, actions } = this.props;
    return (
      <MuiThemeProvider>
        <div style={{ display: "flex", margin: "1rem", width: "50rem" }}>
          <Paper style={{ width: "30rem" }}>
            <Subheader>Simple Form</Subheader>
            <ArenaForm
              formData={formData}
              setFormValue={actions.setFormValue}
            >
              <div style={{ padding: "0 1rem 1rem 1rem" }}>
                <TextField
                  raf_location="message"
                  floatingLabelText="Message for alert"
                />
                <br />
                <Checkbox
                  style={{ marginTop: "1rem" }}
                  raf_location="isEnabled"
                  label="isEnabled"
                />
                <br />
                <SelectField
                  raf_location="sendTo"
                  multiple={true}
                  floatingLabelText="Send to"
                >
                  <MenuItem value="John" primaryText="John" />
                  <MenuItem value="Lily" primaryText="Lily" />
                  <MenuItem value="Susie" primaryText="Susie" />
                  <MenuItem value="Amily" primaryText="Amily" />
                  <MenuItem value="Jack" primaryText="Jack" />
                </SelectField>
              </div>
            </ArenaForm>
            <FlatButton
              style={{ margin: "1rem 0 1rem 10rem" }}
              primary={true}
              label="Submmit"
              onClick={this.onSubmit}
            />
          </Paper>
          <Paper
            style={{
              width: "19rem",
              marginLeft: "1rem"
            }}
          >
            <Subheader>Form Data In Redux</Subheader>
            <pre
              style={{
                wordBreak: "break-all",
                padding: "0 1rem",
                whiteSpace: "pre-wrap"
              }}
            >
              {JSON.stringify(formData.toJS(), null, 4)}
            </pre>
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}
