import React, { useRef } from "react";
import "./Modal.css";
import { MdOutlineClose } from "react-icons/md";

function Modal({ isOpen, toggleShow }) {
  if (!isOpen) return null;
  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") {
          toggleShow();
        }
      }}
    >
      <div className="modal">
        <div className="modal-title">
          <h1> Are you sure ? </h1>
          <MdOutlineClose size={28} className="close" onClick={toggleShow} />
        </div>
        <div className="modal-body">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="modal-footer">
          <button onClick={toggleShow} className="cancel">
            {" "}
            cancel{" "}
          </button>
          <button className="ok"> continue </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
