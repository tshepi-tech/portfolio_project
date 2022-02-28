import ProjectModal from "./ProjectModal";

export default function ProjectItem({
  project,
  setShowModal,
  selectedProject,
}) {
  const { id, name, uploaded } = project;

  function openProject() {
    setShowModal(true);
    const selectedProject = project;
    console.log("ProjectItem,openProject", selectedProject);
  }

  return (
    <div>
      <button onClick={() => openProject(selectedProject)}>{name}</button>
    </div>
  );
}

//() => setShowModal(true)
//openProject should be OnOpenProject
