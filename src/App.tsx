import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

import icon from '/icon.png';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
    const sections = ['contact', 'resume', 'projects', 'about', 'home'];
      const scrollY = window.scrollY + 100; // add offset for sticky navbar

      for (let id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY && el.offsetTop + el.offsetHeight > scrollY) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = (id: string) =>
    `hover:text-[#d95a00] ${activeSection === id ? 'text-[#d95a00] font-semibold' : ''}`;

  return (
    <div>
      <header className="bg-[#101829]/90 shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
          {/* Icon + Site Name */}
          <div className="flex items-center space-x-2">
            <img className="h-8" src={icon} alt="Site Icon" />
            <div className="text-[#F8FCFA] text-xl font-semibold">Navodit's Portfolio</div>
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex space-x-6 text-[#F8FCFA]">
            <li><a href="#home" className={navLinkClass('home')}>Home</a></li>
            <li><a href="#about" className={navLinkClass('about')}>About</a></li>
            <li><a href="#projects" className={navLinkClass('projects')}>Projects</a></li>
            <li><a href="#resume" className={navLinkClass('resume')}>Resume</a></li>
            <li><a href="#contact" className={navLinkClass('contact')}>Contact</a></li>
          </ul>

          {/* Hamburger Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#F8FCFA] focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </nav>

        {/* Mobile Nav Links */}
        {isOpen && (
          <ul className="md:hidden flex flex-col items-center space-y-4 py-4 bg-[#101829] text-[#F8FCFA]">
            {['home', 'about', 'projects', 'resume', 'contact'].map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setIsOpen(false)}
                  className={navLinkClass(id)}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>

      <Home />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
