import React from "react";
import ReactDOM from "react-dom";
import { ModalContext } from "../Context/ModalContext";

const ModalPortal = () => {
  let { modalContent, handleModal, modal } = React.useContext(ModalContext);
  if (modal) {
    return ReactDOM.createPortal(
      <div
        className="fixed top-0 left-0 h-screen w-full flex items-center justify-center"
        style={{ background: "rgba(0,0,0,0.8)" }}
      >
        <div className="modal-box bg-base-100 relative h-[95vh] min-w-[80vw]">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => handleModal()}
          >
            ✕
          </button>
          <div>{modalContent}</div>
        </div>
      </div>,
      document.querySelector("#modal-root")
    );
  } else return null;
};

export default ModalPortal;
