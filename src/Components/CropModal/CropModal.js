import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import ReactCrop from "react-image-crop";
import 'react-image-crop/dist/ReactCrop.css';
import { Button, Transition, Modal } from "semantic-ui-react";

const getInitialCrop = () => ({ unit: '%', width: 50, height: 50, x: 25, y: 25, aspect: 1});

function CropModal(props) {

    const [crop, setCrop] = useState(getInitialCrop());
    const [completedCrop, setCompletedCrop] = useState(null);

    const modalStyle = {
        margin: '1% 10%',
        width: '80%',
        textAlign: 'center'
    };

    useEffect(() => setCrop(getInitialCrop()), [props.isModalOpen])  // reset crop on modal open/close

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
                    crop={crop}
                    onChange={c => setCrop(c)}
                    onComplete={c => setCompletedCrop(c)}
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
    onImageLoaded: PropTypes.func,
}

export default CropModal;