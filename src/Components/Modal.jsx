//Project Files
import ProjectCard from "./ProjectCard";

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
        <ProjectCard shownProject={shownProject} projects={projects} />
      </div>
    </>
  );
}
