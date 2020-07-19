import React, { Component } from "react";
import { Link } from "react-router-dom";

class Profile extends Component {
  render() {
    return (
      <>
        <div>Welcome to your profile</div>;
        <Link to="/upload">Upload product</Link>
      </>
    );
  }
}

export default Profile;
