import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import "./styles/app.scss";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work/:id" element={<Work />} />
        <Route path="/notfound" element={<NotFound />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
