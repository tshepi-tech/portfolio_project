//Styles
import "./App.css";
import "./Styles/Layout.css";

//Project files
import projects from "./Data/projects.json";
import technologies from "./Data/technologies.json";
import NavigationBar from "./Sections/NavigationBar";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Hero from "./Sections/Hero";
import Portfolio from "./Sections/Portfolio";
import TechStack from "./Sections/TechStack";

export default function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <About />
      <Portfolio projects={projects} />
      <TechStack technologies={technologies} />
      <Contact />
    </div>
  );
}
