import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skill from "./components/Skill";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  // Animation
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 100,
      easing: "ease-in-sine",
      offset: 100,
    });
    AOS.refresh();
  });

  return (
    <div className="min-h-screen">
      <div className="fixed top-0 -z-10 min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]"></div>

      {/* <Navbar /> */}
      <About />
      <Experience />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
