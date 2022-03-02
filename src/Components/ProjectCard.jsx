export default function ProjectCard({ projects, shownProject }) {
  //Properties
  const projectDisplayed = shownProject.selectedProject;
  const heading = projectDisplayed.name;
  const description = projectDisplayed.description;
  const comment = projectDisplayed.comment;
  const techStack = projectDisplayed.techStack;
  const website = projectDisplayed.website;
  const github = projectDisplayed.github;
  const projectImage = projectDisplayed.image;

  return (
    <>
      <h1>{heading}</h1>

      {projectDisplayed.uploaded && <h2>{description}</h2>}
      {!projectDisplayed.uploaded && <h2>{comment}</h2>}
      <li>{techStack}</li>
      <a href={website}>
        <button>Website</button>
      </a>
      <a href={github}>
        <button>Github repo</button>
      </a>
    </>
  );
}
