import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import contactBg from "../assets/contact-img.png";
import "./Styles/Contact.css";

function Contact() {
  return (
    <div className="contact-wrapper">
      <section
        className="contact-section d-flex align-items-center"
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <div className="overlay"></div>

        <Container className="position-relative">
          <Row className="text-center mb-5 text-white">
            <Col>
              <h1 className="contact-title fw-bold display-4">Contact Us</h1>
              <p className="contact-subtitle">
                Have questions, partnership ideas, or want to support our
                mission? We'd love to hear from you.
              </p>
            </Col>
          </Row>

          <Row className="g-4 align-items-stretch">
            <Col md={5}>
              <div className="contact-info p-4 h-100 text-white">
                <h4 className="mb-4">UnityBridge Foundation</h4>
                <p>
                  Connecting underserved communities with opportunities,
                  resources, and sustainable development.
                </p>

                <div className="mt-4">
                  <p>
                    <strong>📍 Address:</strong> Lagos, Nigeria
                  </p>
                  <p>
                    <strong>📞 Phone:</strong> +234 9024725100
                  </p>
                  <p>
                    <strong>📧 Email:</strong> unitybridge.org@gmail.com
                  </p>
                </div>
              </div>
            </Col>

            <Col md={7}>
              <div className="contact-form p-4 shadow-lg">
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your full name"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Write your message here..."
                    />
                  </Form.Group>

                  <button type="button" className="contact-btn">
                    Send Message
                  </button>
                </Form>
              </div>
            </Col>
          </Row>

          {/* Closing note */}
          <Row className="mt-5">
            <Col>
              <div className="closing-note text-center text-white">
                <h5>📢 Closing Note</h5>
                <p>
                  At UnityBridge Foundation, every voice matters, and every
                  action counts. We look forward to connecting with you.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Contact;
