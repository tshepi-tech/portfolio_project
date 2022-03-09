//Project files
import ProjectItem from "../Components/ProjectItem";

// The text is outside the component
const text =
  "Have a look at my projects that I have done and some which will be uploaded throughout my journey! Don't hesitate to share your thoughts.";

// Too many arguments -1
export default function Portfolio({
  projects,
  setShowModal,
  shownProject,
  setShownProject,
}) {
  const listProjects = projects.map((item) => (
    // Here Prettier is telling you that you are doing to much by passing to many arguments
    <ProjectItem key={item.id} item={item} />
  ));

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
