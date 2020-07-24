import React, { useState, useRef, useCallback } from "react";
import 'react-image-crop/dist/ReactCrop.css';
import { Button, Form, Message } from "semantic-ui-react";

import axios from "../../axiosInstance";
import styles from "../SignUp/SignUp.module.css";
import CropModal from "../../Components/CropModal/CropModal"
import FileUploadButton from "../../Components/FileUploadButton/FileUploadButton"
import { getCroppedImage, extractImageFileExtensionFromBase64 } from './imageUtils'

const UploadPage = (props) => {
  const [title, setTitle] = useState("");
  const [imageData, setImageData] = useState();
  const [imageExt, setImageExt] = useState();
  const [imageFile, setImageFile] = useState();
  const [completedCrop, setCompletedCrop] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const imageRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      setImageFile(e.target.files[0])
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImageData(reader.result);
        setImageExt(extractImageFileExtensionFromBase64(reader.result));
        setIsModalOpen(true);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onImageLoaded = useCallback(img => {
    console.log('OnImageLoaded called!!!')
    imageRef.current = img;
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", title);
    data.append("image1", imageFile);  // needs to be file in end
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

  const onCropComplete = async () => {
    setIsModalOpen(false);
    const imgElement = document.createElement('img', '_')
    imgElement.src = imageData;
    const fileName = `product.${imageExt}`;
    debugger
    const croppedImageFile = await getCroppedImage(imgElement, completedCrop, fileName, imageExt)

    setImageFile(croppedImageFile);
  }

  const disabled = !(title.length > 0);  

  return (
    <>
      <CropModal
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        image={imageData}
        onImageLoad={onImageLoaded}
        setCompletedCrop={setCompletedCrop}
        onConfirm={() => onCropComplete()}
      />

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
