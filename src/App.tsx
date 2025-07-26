// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {

    return (
        <div className="snap-y snap-mandatory overflow-y-scroll h-screen ">
            <div className="snap-always snap-center">
                <Home />
            </div>
            <div className="snap-always snap-center" >
                <About />
            </div>
            <div className="snap-always snap-center">
                <Projects />
            </div>
            <div className="snap-always snap-center" >
                <Skills />
            </div>
        </div>
    );
}

export default App
