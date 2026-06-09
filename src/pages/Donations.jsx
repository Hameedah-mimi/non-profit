import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import donateImg from "../assets/donate.png";
import educationImg from "../assets/education.png";
import medicalImg from "../assets/medical.png";
import logisticsImg from "../assets/logistics.png";
import heroBg from "../assets/background.jpg";
import "./Styles/Donations.css";

function Donate() {
  return (
    <div className="donate-page">
      <section
        className="donate-hero d-flex align-items-center"
        style={{
          backgroundImage: `url(${logisticsImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          position: "relative",
        }}
      >
        <div className="hero-blur">
          <Container className="hero-content h-100">
            <Row className="justify-content-center h-100">
              <Col
                lg={8}
                className="d-flex flex-column justify-content-center align-items-center text-center text-white"
              >
                <h1 className="display-3 fw-bold">Support Our Mission</h1>

                <p className="hero-texts fw-semibold mt-4">
                  Your generosity helps us empower underserved communities
                  through education, healthcare, and sustainable development.
                </p>

                <Button className="custom-btn mt-4" size="lg">
                  Donate Now
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section className="donate-section">
        <Container>
          <h2 className="section-title">💖 Why Your Support Matters</h2>
          <p className="section-text">
            Your contributions enable us to continue delivering impactful
            programs and reaching more communities. Every donation directly
            supports our initiatives and helps sustain our operations.
          </p>
        </Container>
      </section>

      <section className="usage-section">
        <Container>
          <h2 className="section-title">💰 How Donations Are Used</h2>

          <Row>
            <Col md={4}>
              <Card className="donate-card">
                <Card.Img variant="top" src={educationImg} />
                <Card.Body>
                  <Card.Title>Educational Support</Card.Title>
                  <Card.Text>
                    Educational materials, scholarships, training programs and
                    workshops.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="donate-card">
                <Card.Img variant="top" src={medicalImg} />
                <Card.Body>
                  <Card.Title>Medical Outreach</Card.Title>
                  <Card.Text>
                    Medical outreach programs, healthcare support and supplies.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="donate-card">
                <Card.Img variant="top" src={logisticsImg} />
                <Card.Body>
                  <Card.Title>Operations & Logistics</Card.Title>
                  <Card.Text>
                    Operational costs, transport, logistics and coordination.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="accountability-section">
        <Container>
          <h2 className="section-title">🔒 Accountability</h2>
          <p className="section-text">
            We are committed to transparency and provide periodic reports
            detailing how funds are utilized and the impact achieved.
          </p>
        </Container>
      </section>
    </div>
  );
}

export default Donate;
