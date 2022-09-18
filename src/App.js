import React from 'react';
import Home from './component/Home';
import Header from './component/Header';
import Footer from './component/Footer';
import About from './component/About';
import Services from './component/Services';
import Protfolio from './component/Protfolio';
// import Testimonial from './component/Testimonial';
import Blog from './component/Blog';
import Contact from './component/Contact';
// import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Protfolio />
      {/* <Testimonial /> */}
      <Blog />
      <Contact />
      <Footer />

      {/* <Routes>
        <Route path="/about" element={<About />} />
      </Routes> */}

    </>
  )
}

export default App
