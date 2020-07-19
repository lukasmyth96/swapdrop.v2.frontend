import React, { Component } from "react";

import axios from "../../axiosInstance";
import styles from "./UploadPage.module.css";

class UploadPage extends Component {
  state = {
    title: "",
    image1: undefined,
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

  handleFileUpload = (e) => {
    const name = e.target.name;
    const file = e.target.files[0];
    this.setState((prevstate) => {
      const newState = { ...prevstate };
      newState[name] = file;
      return newState;
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", this.state.title);
    data.append("image1", this.state.image1);
    axios
      .post("/products/", data, {
        headers: {
          Authorization: `JWT ${localStorage.getItem("token")}`,
          "content-type": "multipart/form-data",
        },
      })
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
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="title">Product title</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handle_change}
          />
          <input type="file" name="image1" onChange={this.handleFileUpload} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default UploadPage;
