const text = "These are the tools I am learning and using to build projects ";

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
      <hr className="solid"></hr>
    </div>
  );
}
