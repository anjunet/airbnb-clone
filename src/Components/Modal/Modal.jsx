import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../actions/modalAction";
import "./Modal.css";

const Modal = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const { openClose, content } = modal;

  if (!openClose || openClose !== "open") return null;

  const closeModalHandler = () => {
    dispatch(openModal("close", ""));
  };

  return (
    <div
      className="site-modal"
      style={{ display: openClose === "open" ? "block" : "none" }}
    >
      <div className="modal-content">
        <div className="col right">
          <span onClick={closeModalHandler} className="close">
            &times;
          </span>
        </div>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Modal;
