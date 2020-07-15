import React, { Component } from "react";
import axios from "../../axiosInstance";

class Profile extends Component {
  state = {
    username: "no user",
  };

  componentDidMount() {
    axios
      .get("/users/current_user/", {
        headers: { Authorization: `JWT ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        this.setState({ username: response.data.username });
      })
      .catch(() => {
        alert("Failed to authentificate user");
        this.props.history.push("/login");
      });
  }

  render() {
    return <div>Welcome to your profile {this.state.username}</div>;
  }
}

export default Profile;
