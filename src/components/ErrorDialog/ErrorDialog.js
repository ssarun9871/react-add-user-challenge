import React from "react";
import "./ErrorDialog.css";
import "../UI/Modal.css";
import  ReactDom from "react-dom";

const ErrorDialog = (props) => {
  return ReactDom.createPortal(
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="error-header">Invalid input</div>
        <div className="error-body">
          <p>{props.error}</p>
          <button className="error-button" onClick={props.onOkay}>Okay</button>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export default ErrorDialog;
