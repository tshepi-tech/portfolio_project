export default function ProjectItem({
  project,
  setShowModal,
  selectedProject,
  setShownProject,
  shownProject,
}) {
  const { id, name, uploaded } = project;

  function openProject(b) {
    setShowModal(true);
    selectedProject = project;
    console.log("ProjectItem,openProject", selectedProject);
    setShownProject({ selectedProject });
    console.log("shownproject", shownProject);
  }

  return (
    <div>
      <button onClick={() => openProject(selectedProject)}>{name}</button>
    </div>
  );
}
