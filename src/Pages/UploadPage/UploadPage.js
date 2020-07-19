import React, { Component } from "react";

import axios from "../../axiosInstance";
import styles from "./UploadPage.module.css";

class UploadPage extends Component {
  state = {
    title: "",
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

  handle_upload = (e) => {
    e.preventDefault();
    const data = {
      title: this.state.title,
    };
    axios
      .post("/products/", data)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        this.props.history.push("/profile");
      })
      .catch(() => {
        console.log("Error");
      });
  };

  render() {
    return (
      <div className={styles.UploadPageForm}>
        <h1>Upload your product</h1>
        <form onSubmit={(e) => this.handle_upload(e)}>
          <label htmlFor="title">Product title</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handle_change}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default UploadPage;
