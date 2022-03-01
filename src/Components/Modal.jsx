//Project Files
import ProjectModal from "./ProjectModal";
import ProjectItem from "./ProjectItem";

//NPM Packages
import { useState } from "react";

export default function Modal({ modalState, onClose, projects, shownProject }) {
  const [showModal, setShowModal] = modalState;
  function onClose() {
    setShowModal(false);
    console.log("modal,onClose", shownProject.selectedProject.name);
  }

  //Properties
  const thisProject = shownProject.selectedProject;
  const heading = thisProject.name;
  const description = thisProject.description;

  //Safeguard
  if (!showModal) return null;

  return (
    <>
      <div className="overlay_styles" />
      <div className="modal_styles">
        <button onClick={onClose}>Close modal</button>
        <ProjectModal
          heading={heading}
          description={description}
          shownProject={shownProject}
          projects={projects}
        />
      </div>
    </>
  );
}
