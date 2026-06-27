import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

import logo2 from "../assets/logo2.png";
import "../Styles/Navbar.css";

function CustomNavbar() {
  const [expanded, setExpanded] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/projects", label: "Our Projects" },
    { path: "/involved", label: "Get Involved" },
    { path: "/events", label: "Events" },
    { path: "/donate", label: "Donate Now" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <Navbar expand="lg" expanded={expanded} className="custom-navbar">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img src={logo2} alt="UnittyBridge Foundation" className="logo" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="main-navbar"
          onClick={() => setExpanded(!expanded)}
        >
          <FaBars />
        </Navbar.Toggle>

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto nav-links">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="nav-item"
                onClick={() => setExpanded(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
