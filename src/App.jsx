//Styles
import "./App.css";
import "./Styles/LayoutStyles.css";
import "./Styles/PortalStyles.css";
import "./Styles/NavigationBarStyles.css";
import "./Styles/HeroStyles.css";

//Project files
import Modal from "./Components/Modal";
import projects from "./Data/projects.json";
import technologies from "./Data/technologies.json";
import NavigationBar from "./Sections/NavigationBar";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Hero from "./Sections/Hero";
import Portfolio from "./Sections/Portfolio";
import TechStack from "./Sections/TechStack";

//NPM packages
import { useState } from "react";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [shownProject, setShownProject] = useState({});

  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <About />
      <Portfolio
        setShowModal={setShowModal}
        shownProject={shownProject}
        setShownProject={setShownProject}
        projects={projects}
      />
      <TechStack technologies={technologies} />
      <Contact />
      <Modal
        modalState={[showModal, setShowModal]}
        shownProject={shownProject}
      />
    </div>
  );
}
