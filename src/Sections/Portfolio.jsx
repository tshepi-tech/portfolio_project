//Project files
import ElementLayout from "../Components/ElementLayout";

const text = "WORDS WORDS WORDS";

export default function Portfolio({ projects }) {
  const listProjects = projects.map((project) => (
    <li key={project.id}>{project.name}</li>
  ));

  return (
    <div id="Portfolio">
      <ElementLayout title="Portfolio" text={text} media={listProjects} />;
    </div>
  );
}
