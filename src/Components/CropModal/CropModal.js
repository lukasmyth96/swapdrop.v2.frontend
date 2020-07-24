import React, { useState } from 'react';
import PropTypes from 'prop-types'
import ReactCrop from "react-image-crop";
import 'react-image-crop/dist/ReactCrop.css';
import { Button, Transition, Modal } from "semantic-ui-react";

const getInitialCrop = () => ({ unit: '%', width: 50, height: 50, x: 25, y: 25, aspect: 1});

function CropModal(props) {

    const [currentCrop, setCurrentCrop] = useState(getInitialCrop());

    const modalStyle = {
        margin: '1% 10%',
        width: '80%',
        textAlign: 'center'
    };

    return (
        <Transition visible={props.isModalOpen} animation="scale" duration={500}>
            <Modal 
            style={modalStyle} 
            open={props.isModalOpen} 
            onClose={props.closeModal}>
            <Modal.Header>Crop away...</Modal.Header>
            <Modal.Content image>
                <div style={{width: "50%", margin: "auto"}}>
                <ReactCrop
                    src={props.image}
                    onImageLoaded={props.onImageLoaded}
                    crop={currentCrop}
                    onChange={(c, percentCrop) => setCurrentCrop(percentCrop)}  // called on every change
                    onComplete={(c, percentCrop) => props.setCompletedCrop(percentCrop)}  // called only on mouse unFocus
                    />
                </div>
            </Modal.Content>
            <Button negative onClick={props.closeModal} > Cancel </Button> 
            <Button positive onClick={props.onConfirm} > Confirm </Button> 
            </Modal>
      </Transition>
    );
}

CropModal.propTypes = {
    isModalOpen: PropTypes.bool,
    closeModal: PropTypes.func,
    image: PropTypes.any,
    onImageLoaded: PropTypes.func,
    setCompletedCrop: PropTypes.func,
    onConfirm: PropTypes.func,
}

export default CropModal;