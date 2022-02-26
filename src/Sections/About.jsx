//Project files
import ElementLayout from "../Components/ElementLayout";

export default function About() {
  const text = "WORDS WORDS WORDS";

  return (
    <div id="About">
      <ElementLayout title="About Me" text={text} />;
    </div>
  );
}
