//Project Files
import ProjectModal from "./ProjectModal";
import ProjectItem from "./ProjectItem";

//NPM Packages
import { useState } from "react";

export default function Modal({ modalState, onClose, projects, shownProject }) {
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
        <ProjectModal shownProject={shownProject} projects={projects} />
      </div>
    </>
  );
}
