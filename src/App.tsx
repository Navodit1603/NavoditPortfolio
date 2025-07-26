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
        <div>
            <Home />
            <About />
            <Projects />
            <Skills />
        </div>
    );
}

export default App
