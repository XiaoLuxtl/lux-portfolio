/* eslint-disable react/prop-types */
import React from "react";
import { useModal } from "../hooks/useModal";
import ModalPortal from "../ui/ModalPortal";

let ModalContext;
let { Provider } = (ModalContext = React.createContext());

let ModalProvider = ({ children }) => {
  let { modal, handleModal, modalContent } = useModal();
  return (
    <Provider value={{ modal, handleModal, modalContent }}>
      <ModalPortal />
      {children}
    </Provider>
  );
};

export { ModalContext, ModalProvider };
