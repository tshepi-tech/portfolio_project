import ProjectItem from "./ProjectItem";

export default function ProjectModal({
  projects,
  id,
  name,
  selectedProject,
  shownProject,
}) {
  return (
    <>
      <div>
        <h1>ProjectName</h1>
        <h2>Description</h2>
        <h3>teckstack pills</h3>
        <button>Website</button>
        <button>Github repository</button>
      </div>
    </>
  );
}
