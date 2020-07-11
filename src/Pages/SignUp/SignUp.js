import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

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

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch("http://localhost:8000/core/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        localStorage.setItem("token", json.token);
        this.setState({
          logged_in: true,
          displayed_form: "",
          username: json.username,
          user_id: json.user.id,
        });
        this.props.history.push("/profile");
      });
  };
  display_form = (form) => {
    this.setState({
      displayed_form: form,
    });
  };

  render() {
    return (
      <form onSubmit={(e) => this.handle_signup(e, this.state)}>
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
