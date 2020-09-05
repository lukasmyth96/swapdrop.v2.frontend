import React, { useRef } from 'react';
import PropTypes from 'prop-types'
import { Button } from "semantic-ui-react";

function FileUploadButton(props) {

    const fileInputRef = useRef()

    return (
        <>
            <Button
            content={props.text}
            labelPosition="left"
            icon={props.complete ? "check" : "upload"}
            onClick={() => fileInputRef.current.click()}/>   

            <input
            ref={fileInputRef}
            type="file"
            hidden
            onChange={props.onChange}/>
        </>
    );
}

FileUploadButton.propTypes = {
    text: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
}

export default FileUploadButton;