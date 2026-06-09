import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Involved from "./pages/Involved.jsx";
import Events from "./pages/Events.jsx";
import Contact from "./pages/Contact.jsx";
import Donations from "./pages/Donations.jsx";
import Policies from "./pages/policies.jsx";
import CustomNavbar from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Involved" element={<Involved />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donations />} />
        <Route path="/policies" element={<Policies />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
