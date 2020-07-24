import React, { useState, useRef, useCallback } from "react";
import ReactCrop from "react-image-crop";
import 'react-image-crop/dist/ReactCrop.css';
import { Button, Form, Message, Modal, Image } from "semantic-ui-react";

import axios from "../../axiosInstance";
import styles from "../SignUp/SignUp.module.css";
import './Modal.css'
import FileUploadButton from "../../Components/FileUploadButton/FileUploadButton"

const UploadPage = (props) => {
  const [title, setTitle] = useState("");
  const [image1, setImage1] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const image1Ref = useRef(null);
  const [crop, setCrop] = useState({
    unit: '%',
    width: 50,
    height: 50,
    x: 25,
    y: 25,
    aspect: 1
  });
  const [completedCrop, setCompletedCrop] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImage1(reader.result);
        setModalOpen(true);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onLoad = useCallback(img => {
    image1Ref.current = img;
  }, []);

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

  const inlineStyle = {
    modal : {
      margin: '1% 10%',
      width: '80%',
      textAlign: 'center'
    }
  };

  return (
    <>

          <Modal style={inlineStyle.modal} size='large' open={modalOpen} onClose={() => setModalOpen(false)}>
            <Modal.Header>Crop away...</Modal.Header>
            <Modal.Content image>
              <ReactCrop
                  src={image1}
                  imageStyle={{width: "50%", margin: "auto"}}
                  onImageLoaded={onLoad}
                  crop={crop}
                  onChange={c => setCrop(c)}
                  onComplete={c => setCompletedCrop(c)}
                />
            </Modal.Content>
            <Button negative onClick={() => setModalOpen(false)} > Cancel </Button> 
            <Button positive onClick={() => setModalOpen(false)} > Confirm </Button> 
          </Modal>

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

          <Form.Field>
            <FileUploadButton
                text="Choose Image"
                complete={!(typeof variable === 'undefined')}
                onChange={onSelectFile}/>
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
    </>
  );


}


export default UploadPage;
