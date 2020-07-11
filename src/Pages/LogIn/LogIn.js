import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.handle_login = this.handle_login.bind(this);
  }
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

  handle_login = (e, data) => {
    e.preventDefault();
    fetch("http://localhost:8000/token-auth/", {
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
          username: json.user.username,
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
      <div className="h-100 row justify-content-center align-items-center">
        <h1>Welcome back!</h1>
        <form onSubmit={(e) => this.handle_login(e, this.state)}>
          <h4>Log In</h4>
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
      </div>
    );
  }
}

export default withRouter(LogIn);
