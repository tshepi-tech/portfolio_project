//NPM Packages
//import { useState } from "react";
import ProjectModal from "./ProjectModal";

export default function ProjectItem({
  project,
  setShowModal,
  selectedProject,
  setShownProject,
  shownProject,
}) {
  const { id, name, uploaded } = project;
  //const [shownProject, setShownProject] = useState({});

  function openProject() {
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

//() => setShowModal(true)
//openProject should be OnOpenProject
