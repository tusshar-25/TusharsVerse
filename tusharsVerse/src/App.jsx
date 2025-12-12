import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectsSection from "./components/ProjectsSection";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      id="top"
      className="min-h-screen bg-[radial-gradient(circle_at_top,_#1e293b_0,_#020617_45%,_#020617_100%)] text-slate-50"
    >
      <Navbar />
      <Hero />
      <About />
      <ProjectsSection />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
