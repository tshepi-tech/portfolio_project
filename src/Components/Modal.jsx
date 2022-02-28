//NPM Packages
import { useState } from "react";

export default function Modal({ modalState, children, onClose }) {
  const [showModal, setShowModal] = modalState;
  function onClose() {
    setShowModal(false);
  }

  //Safeguard
  if (!showModal) return null;

  return (
    <>
      <div className="overlay_styles" />
      <div className="modal_styles">
        <button onClick={onClose}>Close modal</button>
        {children}
      </div>
    </>
  );
}
