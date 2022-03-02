export default function ProjectCard({ shownProject }) {
  //Properties
  const projectDisplayed = shownProject.selectedProject;
  const heading = projectDisplayed.name;
  const description = projectDisplayed.description;
  const comment = projectDisplayed.comment;
  const techStack = projectDisplayed.techStack;
  const website = projectDisplayed.website;
  const github = projectDisplayed.github;

  return (
    <>
      <h2 className="portfolio-h2">{heading}</h2>
      {projectDisplayed.uploaded && <p>{description}</p>}
      {!projectDisplayed.uploaded && <p>{comment}</p>}
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
