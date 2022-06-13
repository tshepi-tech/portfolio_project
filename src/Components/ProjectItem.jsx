export default function ProjectItem({
  project,
  setShowModal,
  selectedProject,
  setShownProject,
}) {
  const { name, imageURL } = project;
  // Properties
  // const image = require(`../Images/${imageURL}`);

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
          {/* <img src={image} /> */}
          {name}
        </button>
      </div>
    </div>
  );
}
