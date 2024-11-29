import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home'; 
import About from './components/About'; 
import Projects from './components/Projects'; 
import Contact from './components/Contact'; 
import Footer from './components/Footer';
import content from './content.json';
import './styles/index.css';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(content);
  }, []);
  
  return (
    <div className="App">
      <Header />
      <main className='container mx-auto p-4'>
        <Home data={data} />
        <About data={data} />
        <Projects data={data} />
        <Contact data={data} />
      </main>
      <Footer data={data} />
    </div>
  );
}

export default App;
