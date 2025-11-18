import React from 'react'
import About from './components/About'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contac from './components/Contac';

// Declaramos un componente react llamado App y devuelve...
//lo que se vera en la interfaz aqui
//la flecha es comun en react para definir componentes funcionales
const App = () => {
  return (
    //importamos el componente Navbar.
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed inset-0 -z-10 h-full w-full">
        <div className="absolute inset-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies/>
        <Experience/>
        <Projects/>
        <Contac/>
      </div>
    </div>
  );
};

export default App;
