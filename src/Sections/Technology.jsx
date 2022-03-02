//Project files
import ElementLayout from "../Components/ElementLayout";

const text = "WORDS WORDS WORDS";

export default function Technology({ technologies }) {
  const techIuse = technologies.filter((technology) => technology.compotent);

  const listTechnologies = techIuse.map((technology) => (
    <i className={technology.icon} key={technology.id}>
      {technology.name}
    </i>
  ));

  return (
    <div id="Technology">
      <div className="tech-h2">Technologies I use</div>
      <div className="tech-description">{text}</div>
      <div className="tech-box">{listTechnologies}</div>
      {/* <ElementLayout
        title="Technologies I use"
        text={text}
        media={listTechnologies}
      /> */}
    </div>
  );
}
