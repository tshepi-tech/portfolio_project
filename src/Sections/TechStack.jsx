//Project files
import ElementLayout from "../Components/ElementLayout";

const text = "WORDS WORDS WORDS";

export default function TechStack({ technologies }) {
  const techStack = technologies.filter((technology) => technology.compotent);

  const listTechnologies = techStack.map((technology) => (
    <li key={technology.id}>{technology.name}</li>
  ));

  return (
    <div id="TechStack">
      <ElementLayout
        title="Technologies I use"
        text={text}
        media={listTechnologies}
      />
    </div>
  );
}
