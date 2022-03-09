//Project Files
import { createPortal } from "react-dom";
import ProjectCard from "./ProjectCard";

// You are passing 4 arguments instead of the 3 limit -1
export default function Modal({ modalState, onClose, projects, shownProject }) {
  const [showModal, setShowModal] = modalState;
  // add space here between lines
  function onClose() {
    setShowModal(false);
  }

  //Safeguard
  if (!showModal) return null;

  // return (
  //   <>
  //     <div className="overlay_styles" />
  //     <div className="modal_styles">
  //       <button onClick={onClose}>Close modal</button>
  //       <ProjectCard shownProject={shownProject} projects={projects} />
  //     </div>
  //   </>
  // );

  return createPortal(<div>{modal}</div>, document.getElementById("portal"));
}
