//Project Files
import ProjectCard from "./ProjectCard";

export default function Modal({ modalState, onClose, projects, shownProject }) {
  const [showModal, setShowModal] = modalState;
  function onClose() {
    setShowModal(false);
  }

  //Properties
  const projectDisplayed = shownProject.selectedProject;
  const heading = projectDisplayed.name;
  const description = projectDisplayed.description;
  const comment = projectDisplayed.comment;

  //Safeguard
  if (!showModal) return null;

  return (
    <>
      <div className="overlay_styles" />
      <div className="modal_styles">
        <button onClick={onClose}>Close modal</button>
        {projectDisplayed.uploaded && (
          <ProjectCard
            heading={heading}
            description={description}
            shownProject={shownProject}
            projects={projects}
          />
        )}
        {!projectDisplayed.uploaded && (
          <ProjectCard
            heading={heading}
            description={comment}
            shownProject={shownProject}
            projects={projects}
          />
        )}
      </div>
    </>
  );
}
