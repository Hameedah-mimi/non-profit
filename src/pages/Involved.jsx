import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import banner from "../assets/Ivolve-img.png";
import work from "../assets/volunteer-img.png";
import Footer from "../components/Footer";
import "./Styles/Involved.css";

function GetInvolved() {
  return (
    <div className="getinvolved-page">
      <section
        className="getinvolved-hero d-flex align-items-center"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          position: "relative",
        }}
      >
        <div className="overlay"></div>
        <Container className="text-white hero-contents">
          <div className="">
            <h1 className="hero-texts  text-white display-3 fw-bold ">
              Get Involved
            </h1>
            <p className="hero-texts text-white fw-semibold mt-4 ">
              Join UnityBridge Foundation in creating sustainable change through
              volunteering, partnerships, and community collaboration.
            </p>
            <div className="text-center mt-4">
              <Button className="custom-btn" size="lg">
                Join Our Mission
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-5 bg-light">
        <Container className="cards">
          <Row className="mb-5 text-center">
            <Col>
              <h2 className="fw-bold">Volunteer Program</h2>
              <p className="text-muted mx-auto col-md-8">
                Volunteering with UnityBridge Foundation offers individuals the
                opportunity to make a tangible difference while developing
                valuable skills and experiences.
              </p>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Card className="shadow border-0 p-4 h-100 volunteer-card">
                <h4 className="fw-bold mb-3">Ways You Can Contribute</h4>
                <ul className="list-unstyled">
                  <li>✔ Event Coordination</li>
                  <li>✔ Teaching and Mentorship</li>
                  <li>✔ Medical Outreach Support</li>
                  <li>✔ Media and Communications</li>
                </ul>
                <p className="mt-3 text-muted">
                  We provide orientation and support to ensure volunteers are
                  well-prepared for their roles.
                </p>
                <Button className="custom-btn text-center">
                  Become a Volunteer
                </Button>
              </Card>
            </Col>

            <Col md={6}>
              <img
                src={work}
                alt="volunteers"
                className="img-fluid rounded shadow"
                style={{ height: "100%", objectFit: "cover" }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="mb-5 text-center">
            <Col>
              <h2 className="fw-bold">Partnerships</h2>
              <p className="text-muted mx-auto col-md-8">
                We believe collaboration amplifies impact. UnityBridge
                Foundation partners with organizations, institutions,
                businesses, and individuals to deliver programs effectively.
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            <Col md={3}>
              <Card className="shadow-sm border-0 p-4 text-center h-100">
                <h5>Sponsorship</h5>
                <p className="text-muted">Support impactful programs.</p>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="shadow-sm border-0 p-4 text-center h-100">
                <h5>Joint Initiatives</h5>
                <p className="text-muted">
                  Collaborate on meaningful projects.
                </p>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="shadow-sm border-0 p-4 text-center h-100">
                <h5>Resource Support</h5>
                <p className="text-muted">Contribute tools and materials.</p>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="shadow-sm border-0 p-4 text-center h-100">
                <h5>Knowledge Sharing</h5>
                <p className="text-muted">Exchange ideas and expertise.</p>
              </Card>
            </Col>
          </Row>

          <div className="text-center mt-2">
            <Button className="custom-btn" size="lg">
              Partner With Us
            </Button>
          </div>
        </Container>
      </section>
      
    </div>
  );
}

export default GetInvolved;
