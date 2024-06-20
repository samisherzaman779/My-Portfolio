import { About } from "./Component/About";
import { Contact } from "./Component/Contact";
import { Hero } from "./Component/Hero";
import Projects from "./Component/Projects";
import { Skills } from "./Component/Skills";
import ParticlesComponent from './Component/particles'



export default function Home() {
  return (
    <div>
     <ParticlesComponent />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
    </div>
  );
}
