import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

import axios from '../../axiosInstance'

class SignUp extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handle_change = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState((prevstate) => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  handle_signup = (e) => {
    e.preventDefault();
    const data = {username: this.state.username, password: this.state.password}
    axios.post("/users/", data)
    .then(() => {this.props.history.push("/profile");})
    .catch(() => {console.log('Error')})
  };

  render() {
    return (
      <form onSubmit={(e) => this.handle_signup(e)}>
        <h4>Sign Up</h4>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handle_change}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handle_change}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default withRouter(SignUp);

SignUp.propTypes = {
  handle_signup: PropTypes.func.isRequired,
};
