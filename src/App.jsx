import styles from "./App.module.css";
import { About } from './components/About/About';
import { Contact } from "./components/Contact/Contact";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Skill } from "./components/Skill/Skill";
import { Projects } from "./components/Projects/Projects";
import { Education } from "./components/Education/Education";
import ParticlesComponent from "./components/particles";

function App() {
  return (
    <>
      <ParticlesComponent id="tsparticles" />
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Education />
      <Projects />
      <Contact />
    </>
    
  );
}

export default App;

      


