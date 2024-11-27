import React from 'react';
import Header from './components/Header';
import Home from './components/Home'; 
import About from './components/About'; 
import Projects from './components/Projects'; 
import Contact from './components/Contact'; 
import Footer from './components/Footer';
import './styles/index.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main >
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
