

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Sproduct from './components/Sproduct';
import Shop from './components/Shop';

function App() {
  return (
      <Router> 
        <div>
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/shop" element={<Shop />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/sproduct" element={<Sproduct />} />
          </Routes>
          
          <Footer />
        </div>
      </Router>
  );
}

export default App;
