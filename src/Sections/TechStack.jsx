//Project files
import ElementLayout from "../Components/ElementLayout";

const text = "WORDS WORDS WORDS";

export default function TechStack({ technologies }) {
  const listTechnologies = technologies.map((technology) => (
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
