import React, { useState } from "react";
import { withRouter } from "react-router";
import { Button, Form, Message } from "semantic-ui-react";

import axios from '../../axiosInstance'
import styles from './SignUp.module.css'

const SignUp = (props) => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      username: username,
      password: password
    }
    axios.post("/users/", data)
      .then((response) => {
        const { access, refresh } = response.data.token;
        localStorage.setItem('access', access);
        localStorage.setItem('refresh', refresh);
        props.history.push("/profile");
      })
      .catch(error => setErrors(error.response.data))
      .finally(() => setLoading(false))
  };

  const disabled = !([firstName, lastName, email, username, password].every(s => s.length > 0));

  return (
    <div className={styles.FormContainer}>
      <Form className={styles.Form} error={Object.keys(errors).length > 0}>
        <h2 className={styles.centered}> Sign Up </h2>

        <Form.Input
          error={errors.firstName && { content: errors.firstName }}
          placeholder="First Name"
          icon="mail"
          focus
          type="text"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />

        <Form.Input
          error={errors.lastName && { content: errors.lastName }}
          placeholder="Last Name"
          icon="mail"
          focus
          type="text"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />

        <Form.Input
          error={errors.email && { content: errors.email }}
          placeholder="Email"
          icon="mail"
          focus
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

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
          Sign Up
          </Button>
      </Form>
    </div>
  );


};


export default withRouter(SignUp);

