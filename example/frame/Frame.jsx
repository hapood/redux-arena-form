import React, { Component } from "react";
import { Router, Link } from "react-router-dom";
import { RouteScene, ArenaSwitch } from "redux-arena";
import simpleFormBundle from "../simpleForm";
import formWithValidateBundle from "../formWithValidate";
import formWithArrayFieldBundle from "../formWithArrayField";

class Frame extends Component {
  render() {
    return (
      <div>
        <Router history={this.props.history}>
          <div>
            <ul>
              <li>
                <Link to="/redux-arena-form/simpleForm">Simple Form</Link>
              </li>
              <li>
                <Link to="/redux-arena-form/formWithValidate">
                  Form With Validate
                </Link>
              </li>
              <li>
                <Link to="/redux-arena-form/formWithArrayField">
                  Form With Array Field
                </Link>
              </li>
            </ul>
            <hr />
            <div>
              <div style={{ marginTop: "1rem" }}>
                <ArenaSwitch>
                  <RouteScene
                    path="/redux-arena-form/simpleForm"
                    sceneBundle={simpleFormBundle}
                  />
                  <RouteScene
                    path="/redux-arena-form/formWithValidate"
                    sceneBundle={formWithValidateBundle}
                  />
                  <RouteScene
                    path="/redux-arena-form/formWithArrayField"
                    sceneBundle={formWithArrayFieldBundle}
                  />
                </ArenaSwitch>
              </div>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default Frame;
