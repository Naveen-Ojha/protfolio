import React from 'react';
import Home from './component/Home';
import Header from './component/Header';
import Footer from './component/Footer';
import About from './component/About';
// import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Footer />

      {/* <Routes>
        <Route path="/about" element={<About />} />
      </Routes> */}

    </>
  )
}

export default App
