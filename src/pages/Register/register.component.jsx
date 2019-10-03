import React, { Component } from "react";
import "./register.style.scss";
import helper from "../../utility/utility";

export default class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    cpassword: "",
    error: {
      usernameErr: false,
      emailErr: false,
      passwordErr: false
    }
  };

  handleOnChange = event => {
    const { name, value } = event.target;
    console.log("validation message==", helper.validation("username", "&&**"));
    console.log(name, value, "Dfsd");
    this.setState(
      {
        [name]: value
      },
      () => {
        console.log("state", this.state);
        if (name == "email") {
          this.setState(
            {
              error: {
                ...this.state.error,
                email: !helper.validation(name, value)
              }
            },
            () => {
              console.log("validation state", this.state.error);
            }
          );
        } else if (name === "username") {
          this.setState(
            {
              error: {
                ...this.state.error,
                usernameErr: !helper.validation(name, value)
              }
            },
            () => {
              console.log("validation state", this.state.error);
            }
          );
        }
      }
    );
  };
  render() {
    const { usernameErr, emailErr, passwordErr } = this.state.error;
    return (
      <div className="register-form">
        <fieldset>
          <div id="legend">
            <legend className="">Create an Account</legend>
          </div>
          <div class="control-group">
            <label class="control-label" for="username">
              Username
            </label>
            <div class="controls">
              <input
                type="text"
                id="username"
                name="username"
                placeholder=""
                className="form-control"
                onChange={this.handleOnChange}
                onFocus={this.handleOnChange}
                style={{ borderColor: usernameErr ? "red" : "" }}
              />
              {/* <p class="help-block">
                  Username can contain any letters or numbers, without spaces
                </p> */}
            </div>
          </div>

          <div class="control-group">
            <label className="control-label" for="email">
              E-mail
            </label>
            <div class="controls">
              <input
                type="text"
                id="email"
                name="email"
                placeholder=""
                className="form-control"
                onChange={this.handleOnChange}
                onFocus={this.handleOnChange}
                style={{ borderColor: emailErr ? "red" : "" }}
              />
              {/* <p class="help-block">Please provide your E-mail</p> */}
            </div>
          </div>

          <div class="control-group">
            <label class="control-label" for="password">
              Password
            </label>
            <div class="controls">
              <input
                type="password"
                id="password"
                name="password"
                placeholder=""
                className="form-control"
                onChange={this.handleOnChange}
                onFocus={this.handleOnChange}
                style={{ borderColor: passwordErr ? "red" : "" }}
              />
              {/* <p class="help-block">
                  Password should be at least 4 characters
                </p> */}
            </div>
          </div>

          <div class="control-group">
            <label class="control-label" for="password_confirm">
              Password (Confirm)
            </label>
            <div class="controls">
              <input
                type="password"
                id="password_confirm"
                name="password_confirm"
                placeholder=""
                className="form-control"
                onChange={this.handleOnChange}
                onFocus={this.handleOnChange}
                style={{ borderColor: passwordErr ? "red" : "" }}
              />
              {/* <p class="help-block">Please confirm password</p> */}
            </div>
          </div>

          <div className="control-group ">
            <div className="controls register-button">
              <button class="btn btn-success">Register</button>
            </div>
          </div>
        </fieldset>
      </div>
    );
  }
}
