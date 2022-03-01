import ProjectItem from "./ProjectItem";

export default function ProjectModal({ shownProject, heading, Description }) {
  return (
    <>
      <h1>{heading}</h1>
      <h2>{Description}</h2>
      <h3>tech stack</h3>
      <button>Website</button>
      <button>Github repository</button>
    </>
  );
}
