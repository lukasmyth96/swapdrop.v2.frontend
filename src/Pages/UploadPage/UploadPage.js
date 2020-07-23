import React, { useState } from "react";
import { Button, Form, Image, Message } from "semantic-ui-react";

import axios from "../../axiosInstance";
import styles from "../SignUp/SignUp.module.css";
import FileUploadButton from "../../Components/FileUploadButton/FileUploadButton"

const UploadPage = (props) => {
  const [title, setTitle] = useState("");
  const [image1, setImage1] = useState();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", title);
    data.append("image1", image1);
    axios
      .post("/products/", data, {
        headers: {
          Authorization: `JWT ${localStorage.getItem("token")}`,
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        props.history.push("/profile");
      })
      .catch(error => setErrors(error.response.data))
      .finally(() => setLoading(false));
  };

  const disabled = !(title.length > 0 && image1);

  return (
    <div className={styles.FormContainer}>
      <Form className={styles.Form} error={Object.keys(errors).length > 0}>
        <h2 className={styles.centered}> Upload </h2>

        <Form.Input
          error={errors.title && { content: errors.title }}
          placeholder="Title"
          focus
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        {image1 && 
        <Form.Field>
          <Image
            src={URL.createObjectURL(image1)}
            alt="Image 1"
            styles={{width: "50%"}}
            rounded
          />
        </Form.Field>}

        <Form.Field>
          <FileUploadButton
            text="Choose Image"
            complete={!(typeof variable === 'undefined')}
            onChange={e => setImage1(e.target.files[0])}
          />
        </Form.Field>

        <Message
        error
        header="Ooops..."
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
          Upload
          </Button>
      </Form>
    </div>
  );


}


export default UploadPage;
