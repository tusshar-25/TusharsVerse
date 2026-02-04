import { Toaster } from "react-hot-toast";
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
      className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black text-white overflow-x-hidden"
    >
      <Navbar />
      <Hero />
      <About />
      <ProjectsSection />
      <TechStack />
      <Contact />
      <Footer />
      
      {/* Toast notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#1e293b',
            color: '#f8fafc',
            border: '1px solid #8b5cf6',
            fontSize: '14px',
          },
          success: {
            iconTheme: {
              primary: '#8b5cf6',
              secondary: '#f8fafc',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#f8fafc',
            },
          },
        }}
      />
    </div>
  );
}

export default App;
