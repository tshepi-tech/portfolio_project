import TechnologyItem from "../Components/TechnologyItem";

export default function Technology({ technologies }) {
  const techIuse = technologies.filter((technology) => technology.compotent);
  const text = "These are the tools I am learning and using to build projects ";

  const listTechnologies = techIuse.map((item, index) => (
    <TechnologyItem key={index} item={item} />
  ));

  return (
    <div id="Technology">
      <div className="tech-h2">Technologies I use</div>
      <div className="tech-description">{text}</div>
      <div className="tech-box">{listTechnologies}</div>
      <hr className="solid"></hr>
    </div>
  );
}
