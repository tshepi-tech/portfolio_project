//Project files
import ElementLayout from "../Components/ElementLayout";

export default function About() {
  const intro =
    "My name is Tshepiso, An aspiring frontend devleoper from South Africa based in Sweden, Malmö. Welcome to my profile where I share with you my projects and explorations within development.";
  const text =
    "To build my projects I use React and CSS. I am driven by dynamic projects, either big or small that can increase my skills and provide a creative outlet. Ready to take tech on?";

  return (
    <div className="about" id="About">
      <div className="about-h2">About me</div>
      <div className="about-inner">
        <div className="about-box"></div>
        <div className="about-description">
          <p>{intro}</p>
          <p>{text}</p>
        </div>
      </div>
      <hr className="solid"></hr>
    </div>
  );
}
