export default function ProjectModal({ shownProject, heading, description }) {
  return (
    <>
      <h1>{heading}</h1>
      <h2>{description}</h2>
      <h3>tech stack</h3>
      <button>Website</button>
      <button>Github repository</button>
    </>
  );
}
