export default function ProjectCard({ shownProject }) {
  //Properties
  // This aren't properties, you could have done the same in 1 line using destructuring, see the example here and compare with the master branch
  const { description, comment, techStack, website, github } = shownProject;

  // Also i saw you adding name and selectedProject and not using it here -1

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
