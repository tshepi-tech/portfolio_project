//Styles
import "./App.css";
import "./Styles/Layout.css";
import "./Styles/PortalStyles.css";

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

  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <About />
      <Portfolio projects={projects} />
      <TechStack technologies={technologies} />
      <Contact />
      <Modal showModal={showModal} onClose={() => setShowModal(false)}>
        Modal
      </Modal>
    </div>
  );
}
