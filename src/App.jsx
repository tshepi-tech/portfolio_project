//Styles
// Abstraction -1
// You made this component too big by importing every single CSS here. You can do a single CSS that handles this.
import "./App.css";
import "./Styles/PortalStyles.css";
import "./Styles/NavigationBarStyles.css";
import "./Styles/HeroStyles.css";
import "./Styles/AboutStyles.css";
import "./Styles/TechnologyStyles.css";
import "./Styles/PortfolioStyles.css";
import "./Styles/ProjectItemStyles.css";
import "./Styles/ContactStyles.css";

//Project files
import Modal from "./Components/Modal";
import projects from "./Data/projects.json";
import technologies from "./Data/technologies.json";
import NavigationBar from "./Sections/NavigationBar";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Hero from "./Sections/Hero";
import Portfolio from "./Sections/Portfolio";
import Technology from "./Sections/Technology";

//NPM packages
import { useState } from "react";

// Good job on renaming the App to .jsx and adding the export default
// Note, the folders should be always lowercase
export default function App() {
  // You are using 2 states to control the project modal, this could lead to problems. -1
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
      <Technology technologies={technologies} />
      <Contact />
      <Modal
        modalState={[showModal, setShowModal]}
        shownProject={shownProject}
      />
    </div>
  );
}
