//Project files
import ElementLayout from "../Components/ElementLayout";
import ProjectItem from "../Components/ProjectItem";

const text = "WORDS WORDS WORDS";

export default function Portfolio({ projects, setShowModal }) {
  const listProjects = projects.map((project) => (
    <ProjectItem
      setShowModal={setShowModal}
      key={project.id}
      project={project}
    />
  ));

  return (
    <div id="Portfolio">
      <ElementLayout title="Portfolio" text={text} media={listProjects} />
    </div>
  );
}
