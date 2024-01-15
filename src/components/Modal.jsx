import React from "react";
import ReactDOM from "react-dom";
import CloseIcon from "/images/close-outline.svg";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onToggle} />;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal-overlay">
      <img
        className="icon-modal-close"
        src={CloseIcon}
        onClick={props.onToggle}
      />
      <h2>Terms and Services</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        sequi. Dignissimos accusamus, soluta quia nisi itaque error placeat iste
        sit sequi recusandae odit libero tempore sapiente id necessitatibus.
        Maiores, dicta!
      </p>
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onToggle={props.onToggle} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onToggle={props.onToggle} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
