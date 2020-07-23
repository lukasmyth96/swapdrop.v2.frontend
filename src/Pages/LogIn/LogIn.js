import React, { useState } from "react";
import { withRouter } from "react-router";
import { Button, Form, Message } from "semantic-ui-react";

import axios from '../../axiosInstance'
import styles from '../SignUp/SignUp.module.css'

const SignUp = (props) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      username: username,
      password: password
    }
    axios.post("/token-auth/", data)
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        props.history.push("/profile");
      })
      .catch(error => setErrors(error.response.data))
      .finally(() => setLoading(false))
  };

  const disabled = !([username, password].every(s => s.length > 0));

  return (
    <div className={styles.FormContainer}>
      <Form className={styles.Form} error={Object.keys(errors).length > 0}>
        <h2 className={styles.centered}> Log In </h2>

        <Form.Input
          error={errors.username && { content: errors.username }}
          placeholder="Username"
          icon="users"
          focus
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <Form.Input
          error={errors.password && { content: errors.password }}
          placeholder="Password"
          icon="eye slash"
          focus
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <Message
        error
        header="Something went wrong..."
        list={errors["non_field_errors"]}
        />

        <Button
          className={styles.centered}
          positive
          type="submit"
          loading={loading}
          disabled={disabled}
          onClick={handleSubmit}
        >
          Log In
          </Button>
      </Form>
    </div>
  );


};


export default withRouter(SignUp);

