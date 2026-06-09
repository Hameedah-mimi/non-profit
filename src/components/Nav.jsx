import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import logo2 from "../assets/logo2.png";
import "./Styles/Navbar.css";

function CustomNavbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand className="brand d-flex align-items-center">
          <img src={logo2} alt="UnittyBridge Foundation" className="logo" />
        </Navbar.Brand>

        <Nav className="links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/projects">Our Projects</NavLink>
          <NavLink to="/Involved">Get Involved</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/donate">Donate Now</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </Nav>

        <FaBars className="Bars" onClick={() => setShowNav(!showNav)} />

        {showNav && (
          <div className="mobile-nav">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Our Projects</NavLink>
              </li>
              <li>
                <NavLink to="/involve">Get Invovelved</NavLink>
              </li>
              <li>
                <NavLink to="/events">Events</NavLink>
              </li>
              <li>
                <NavLink to="/donate">Donate Now</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        )}
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
