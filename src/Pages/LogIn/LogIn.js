import React from "react";
import { withRouter } from "react-router";

import axios from '../../axiosInstance'
import classes from './LogIn.module.css'

class LogIn extends React.Component {

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

  handle_login = (e) => {
    e.preventDefault();
    const data = {username: this.state.username, password: this.state.password}
    axios.post("/token-auth/", data)
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      this.props.history.push("/profile");
    })
    .catch(() => {console.log('Error')})
  };

  render() {
    return (
      <div className={classes.LogInForm}>
        <h1>Welcome back!</h1>
        <form onSubmit={(e) => this.handle_login(e)}>
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
