// Function arguments -1
// You are passing 4 items instead of the limit of 3
export default function ProjectItem({
  project,
  setShowModal,
  selectedProject,
  setShownProject,
}) {
  const { name } = project;

  function onOpenProject(select) {
    setShowModal(true);
    selectedProject = project;
    setShownProject({ selectedProject });
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
