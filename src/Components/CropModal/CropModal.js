import React from 'react';
import PropTypes from 'prop-types'
import ReactCrop, { Crop } from "react-image-crop";
import 'react-image-crop/dist/ReactCrop.css';
import { Button, Transition, Modal } from "semantic-ui-react";

function CropModal(props) {

    const modalStyle = {
        margin: '1% 10%',
        width: '80%',
        textAlign: 'center'
    };

    return (
        <Transition visible={props.isModalOpen} animation="scale" duration={500}>
            <Modal style={modalStyle} open={props.isModalOpen} onClose={props.closeModal}>
            <Modal.Header>Crop away...</Modal.Header>
            <Modal.Content image>
                <div style={{width: "50%", margin: "auto"}}>
                <ReactCrop
                    src={props.image}
                    onImageLoaded={props.onImageLoaded}
                    crop={props.crop}
                    onChange={c => props.setCrop(c)}
                    onComplete={c => props.setCompletedCrop(c)}
                    />
                </div>
            </Modal.Content>
            <Button negative onClick={props.closeModal} > Cancel </Button> 
            <Button positive onClick={props.closeModal} > Confirm </Button> 
            </Modal>
      </Transition>
    );
}

CropModal.propTypes = {
    isModalOpen: PropTypes.bool,
    closeModal: PropTypes.func,
    image: PropTypes.any,
    crop: PropTypes.objectOf(Crop),
    onImageLoaded: PropTypes.func,
    setCrop: PropTypes.func,
    setCompletedCrop: PropTypes.func,
}

export default CropModal;