import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import {
  FaLocationDot,
  FaEnvelope,
  FaLaptop,
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaChevronRight,
} from "react-icons/fa6";

import logo from "../assets/logo2.png";
import "./styles/Footer.css";

function Footer() {
  const quickLinks = [
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Request Help" },
    { path: "/donate", label: "Donate" },
    { path: "/projects", label: "Projects" },
    { path: "/policies", label: "FAQ & Policies" },
  ];

  const socials = [
    FaFacebookF,
    FaXTwitter,
    FaYoutube,
    FaInstagram,
    FaLinkedinIn,
  ];

  return (
    <footer className="footer-section">
      <div className="footer-top">
        <Container>
          <Row className="g-5">
            {/* Logo */}

            <Col lg={4} md={6}>
              <img
                src={logo}
                alt="Unity Bridge Foundation"
                className="footer-logo"
              />

              <p className="footer-description">
                PLEASE NOTE: Information provided by Unity Bridge Foundation
                across social platforms should not be interpreted as
                professional advice. We connect underserved communities with
                opportunities, resources, and support systems for sustainable
                growth.
              </p>
            </Col>

            {/* Links */}

            <Col lg={4} md={6}>
              <h4 className="footer-title">Quick Links</h4>

              <ul className="footer-links">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <NavLink to={link.path}>
                      <FaChevronRight />
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </Col>

            {/* Contact */}

            <Col lg={4} md={12}>
              <h4 className="footer-title">Contact Us</h4>

              <div className="footer-contact">
                <p>
                  <FaLocationDot />
                  Lagos, Nigeria
                </p>

                <p>
                  <FaEnvelope />
                  unitybridgefoundation.org@gmail.com
                </p>

                <p>
                  <FaLaptop />
                  Chat with us
                </p>
              </div>

              <div className="social-icons">
                {socials.map((Icon, index) => (
                  <a key={index} href="#">
                    <Icon />
                  </a>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer-bottom">
        <Container>
          <div className="footer-bottom-content">
            <p>Terms & Conditions • Privacy Policy</p>

            <p>
              © 2026
              <span> Unity Bridge Foundation</span>
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
