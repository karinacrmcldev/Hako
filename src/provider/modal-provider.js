import React, { useState } from "react";
import { ModalContext } from "../context/modal-context";

export default function ModalProvider({ children, ...props }) {
  const [openModal, setOpenModal] = useState({
    modalSettings: false,
    modalAddArticle: false,
    modalAddNews: false,
    modalAddPhoto: false,
    modalAddDiscussion: false,
    modalAddBook: false,
    modalPinned: false,
  });
  return (
    <ModalContext.Provider value={{ openModal, setOpenModal }} {...props}>
      {children}
    </ModalContext.Provider>
  );
}