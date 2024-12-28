import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Seo from './components/SEO';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import content from './content.json';

const App = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(content);
  }, []);
  return (
    <HelmetProvider>
      <Seo />
      <Router>
        <Header data={data} />
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/about" element={<About data={data} />} />
          <Route path="/projects" element={<Projects data={data} />} />
          <Route path="/contact" element={<Contact data={data} />} />
        </Routes>
        <Footer data={data} />
      </Router>
    </HelmetProvider>
  );
};

export default App;
