import React, { Component, createContext } from "react";
// import ChildA from "./components/UseContactHooks.jsx/ChildA";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";


// const data1 =createContext ();
// const data2 =createContext ();




function App() {
  //   const name = 'Ali';
  //    const age = 22;
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <data1.Provider value ={name}>
      <data2.Provider value={age}>
      <ChildA/>

      </data2.Provider>
    
    </data1.Provider> */}

    </>
  )
}

export default App;
// export {data1,data2}