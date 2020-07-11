import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class LandingPage extends Component {
  render() {
    return (
      <div>
        LandingPage
        <Link exact to="/signup">
          {" "}
          SignUp
        </Link>
        <Link exact to="/login">
          Login
        </Link>
      </div>
    );
  }
}

LandingPage.propTypes = {};

export default LandingPage;
