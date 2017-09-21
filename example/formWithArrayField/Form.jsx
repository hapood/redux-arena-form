import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import ReduxArenaForm from "redux-arena-form";
import {
  TextField,
  Toggle,
  RadioButton,
  RadioButtonGroup
} from "redux-arena-form-material-ui";
import Paper from "material-ui/Paper";
import Subheader from "material-ui/Subheader";
import FlatButton from "material-ui/FlatButton";

export default class Form extends Component {
  onSubmit = () => {
    alert(JSON.stringify(this.props.formData.toJS(), null, 4));
  };

  componentWillReceiveProps(nextProps) {
    let { formData, actions } = nextProps;
    if (formData !== this.props.formData) {
      let newCnt = formData.get("messageNumber");
      let curCnt = formData.get("messages").count();
      if (newCnt > curCnt) {
        actions.setFormData(
          formData.update("messages", array =>
            array.concat(Array(newCnt - curCnt).fill(""))
          )
        );
      } else if (newCnt < curCnt) {
        actions.setFormData(
          formData.update("messages", array => array.slice(0, newCnt))
        );
      }
    }
  }

  render() {
    let { formData, actions } = this.props;
    return (
      <MuiThemeProvider>
        <div style={{ display: "flex", margin: "1rem", width: "50rem" }}>
          <Paper style={{ width: "30rem" }}>
            <Subheader>Simple Form</Subheader>
            <ReduxArenaForm
              formData={formData}
              setFormValue={actions.setFormValue}
            >
              <div style={{ padding: "0 1rem 1rem 1rem" }}>
                <Toggle
                  style={{ marginTop: "1rem" }}
                  raf_location="isEnabled"
                  label="isEnabled"
                />
                <br />
                <RadioButtonGroup
                  raf_location="messageNumber"
                  name="messageNumber"
                >
                  <RadioButton value={0} label="0 messages" />
                  <RadioButton value={1} label="1 messages" />
                  <RadioButton value={2} label="2 messages" />
                </RadioButtonGroup>
                {formData
                  .get("messages")
                  .map((value, index) => (
                    <TextField
                      key={index}
                      raf_location={`messages.${index}`}
                      floatingLabelText={`Message ${index}`}
                    />
                  ))}
              </div>
            </ReduxArenaForm>
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
