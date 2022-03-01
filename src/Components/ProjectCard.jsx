export default function ProjectCard({ projects, shownProject }) {
  //Properties
  const projectDisplayed = shownProject.selectedProject;
  const heading = projectDisplayed.name;
  const description = projectDisplayed.description;
  const comment = projectDisplayed.comment;
  const techStack = projectDisplayed.techStack;

  return (
    <>
      <h1>{heading}</h1>
      {projectDisplayed.uploaded && <h2>{description}</h2>}
      {!projectDisplayed.uploaded && <h2>{comment}</h2>}
      <h3>{techStack}</h3>
      <button>Website</button>
      <button>Github repository</button>
    </>
  );
}
