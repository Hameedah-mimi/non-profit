import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
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
  return (
    <footer className="footer-section p-0 m-0">
      <div className="footer-top">
        <Container>
          <Row className="gy-4">
            <Col md={4}>
              <div className="footer-logo-box">
                <img
                  src={logo}
                  alt="Unity Bridge Logo"
                  className="footer-logo-box mb-3"
                />
              </div>

              <p className="footer-description">
                PLEASE NOTE: The information provided by Unity Bridge Foundation
                on all social media platforms are not to be interpreted as
                professional advice. We connect underserved communities with
                opportunities, resources, and support systems for sustainable
                growth and development.
              </p>
            </Col>

            <Col md={4}>
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links list-unstyled text-dark">
                <li>
                  <a href="/about">
                    <FaChevronRight /> About Us
                  </a>
                </li>

                <li>
                  <a href="/contact">
                    <FaChevronRight /> Request Help
                  </a>
                </li>

                <li>
                  <a href="/donate">
                    <FaChevronRight /> Donate
                  </a>
                </li>

                <li>
                  <a href="/projects">
                    <FaChevronRight /> Projects
                  </a>
                </li>

                <li>
                  <a href="/policies">
                    <FaChevronRight /> FAQ & Policies
                  </a>
                </li>
              </ul>
            </Col>

            <Col md={4}>
              <div className="footer-contact">
                <p>
                  <FaLocationDot /> Lagos, Nigeria
                </p>

                <p>
                  <FaEnvelope /> unitybridgefoundation.org@gmail.com
                </p>

                <p>
                  <FaLaptop /> Chat with us
                </p>
              </div>

              <div className="social-icons d-flex  gap-3">
                <a href="#">
                  <FaFacebookF />
                </a>

                <a href="#">
                  <FaXTwitter />
                </a>

                <a href="#">
                  <FaYoutube />
                </a>

                <a href="#">
                  <FaInstagram />
                </a>

                <a href="#">
                  <FaLinkedinIn />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-bottom">
        <p>Terms & Conditions • Privacy Policy</p>

        <p>
          © 2026 <span>Unity Bridge Foundation</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
