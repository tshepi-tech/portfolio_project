export default function ProjectItem({
  project,
  setShowModal,
  selectedProject,
  setShownProject,
  shownProject,
}) {
  const { id, name, uploaded } = project;

  function onOpenProject(select) {
    setShowModal(true);
    selectedProject = project;
    console.log("ProjectItem,openProject", selectedProject);
    setShownProject({ selectedProject });
    console.log("shownproject", shownProject);
  }

  return (
    <div className="displayCards-box">
      <div className="displayCards-outer">
        <button
          className="displayCards"
          onClick={() => onOpenProject(selectedProject)}
        >
          {name}
        </button>
      </div>
    </div>
  );
}
