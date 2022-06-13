//Project files
import ProjectItem from "../Components/ProjectItem";

export default function Portfolio({
  projects,
  setShowModal,
  shownProject,
  setShownProject,
}) {
  const listProjects = projects.map((project) => (
    <ProjectItem
      shownProject={shownProject}
      setShownProject={setShownProject}
      setShowModal={setShowModal}
      key={project.id}
      project={project}
    />
  ));

  const text =
    "Have a look at my projects that I have done and some which will be uploaded throughout my journey! Don't hesitate to share your thoughts.";
  return (
    <div id="Portfolio">
      <h2 className="portfolio-h2">Portfolio</h2>
      <div className="container-portfolio">
        <p className="portfolio-description">{text}</p>
        <section className="display-grid">{listProjects}</section>
      </div>

      <hr className="solid"></hr>
    </div>
  );
}
