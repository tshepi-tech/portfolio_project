//Project files
import ElementLayout from "../Components/ElementLayout";
import ProjectItem from "../Components/ProjectItem";

const text =
  "Have a look at my projects that I ahve done and some which will be uploaded throughout my journey! Don't hesitate to share your thoughts.";

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

  return (
    <div id="Portfolio">
      <h2 className="portfolio-h2">Portfolio</h2>
      <p className="portfolio-description">{text}</p>
      <section className="displayCards-box ">{listProjects}</section>
      {/* <ElementLayout title="Portfolio" text={text} media={listProjects} /> */}
    </div>
  );
}
