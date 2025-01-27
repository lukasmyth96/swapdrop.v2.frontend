import React, { useState } from 'react';
import PropTypes from 'prop-types'
import ReactCrop from "react-image-crop";
import 'react-image-crop/dist/ReactCrop.css';
import { Button, Transition, Modal } from "semantic-ui-react";

const getInitialCrop = () => ({ unit: '%', width: 80, height: 80, x: 10, y: 10, aspect: 1});

function CropModal(props) {

    const [currentCrop, setCurrentCrop] = useState(getInitialCrop());

    const modalStyle = {
        margin: '1% 20vw',
        width: '60vw',
        height: '100vh',
        textAlign: 'center'
    };

    return (
        <Transition visible={props.isModalOpen} animation="scale" duration={500}>
            <Modal 
            style={modalStyle} 
            open={props.isModalOpen} 
            onClose={() => {
                setCurrentCrop(getInitialCrop())
                props.closeModal()
            }}>
            <Modal.Header>Crop away...</Modal.Header>
            <Modal.Content image>
                <div style={{width: "60%", margin: "auto"}}>
                <ReactCrop
                    src={props.image}
                    imageStyle={{width: "100%"}}
                    crop={currentCrop}
                    onChange={(c, percentCrop) => setCurrentCrop(percentCrop)}  // called on every change
                    onComplete={(c, percentCrop) => props.setCompletedCrop(percentCrop)}  // called only on mouse unFocus
                    />
                </div>
            </Modal.Content>
            <Button size="huge" positive onClick={props.onConfirm}>
                Confirm 
            </Button> 
            </Modal>
      </Transition>
    );
}

CropModal.propTypes = {
    isModalOpen: PropTypes.bool,
    closeModal: PropTypes.func,
    image: PropTypes.any,
    setCompletedCrop: PropTypes.func,
    onConfirm: PropTypes.func,
}

export default CropModal;