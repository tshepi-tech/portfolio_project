//Styles
import "./App.css";
import "./Styles/Layout.css";

//Project files
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
      <Portfolio />
      <TechStack />
      <Contact />
    </div>
  );
}
