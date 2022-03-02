//Project files
import ElementLayout from "../Components/ElementLayout";

const text = "These are the tools I am learning and using to build projects ";

export default function Technology({ technologies }) {
  const techIuse = technologies.filter((technology) => technology.compotent);

  const listTechnologies = techIuse.map((technology) => (
    <li key={technology.id}>{technology.name}</li>
  ));

  return (
    <div id="Technology">
      <div className="tech-h2">Technologies I use</div>
      <div className="tech-description">{text}</div>
      <div className="tech-box">{listTechnologies}</div>
    </div>
  );
}
