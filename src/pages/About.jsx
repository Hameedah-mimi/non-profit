import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import heroImage from "../assets/NGO-pic1.png";
import unity from "../assets/unitybridge.png";
import growth from "../assets/growing.png";
import leader1 from "../assets/leader1.jpg";
import leader2 from "../assets/leader2.jpg";
import leader3 from "../assets/leader3.jpg";
import "./Styles/About.css";

function About() {
  return (
    <div className="about-page">
      <section
        className="about-hero d-flex align-items-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          position: "relative",
        }}
      >
        <Container className=" text-light hero-contents">
          <div>
            <h1 className="hero-texts  text-white display-3 fw-bold ">
              About UnityBridge Foundation
            </h1>
            <p className="hero-texts text-white fw-semibold mt-4">
              Connecting underserved communities with opportunities, resources,
              and support systems that foster sustainable growth and
              development.
            </p>
          </div>
        </Container>
      </section>

      <Container className="py-5">
        <Row className="align-items-center g-5 text-dark">
          <Col lg={6}>
            <img
              src={unity}
              alt="Community outreach"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col lg={6}>
            <h2>Our Story</h2>
            <p>
              UnityBridge Foundation was born out of a deep recognition of the
              inequalities that exist within many communities. What started as
              small outreach efforts evolved into a fully registered
              organization with structured programs, strategic goals, and a
              growing network of volunteers and partners.
            </p>
          </Col>
        </Row>
      </Container>

      <section className="objectives-section py-5">
        <Container>
          <h2 className="text-center mb-5">Strategic Objectives</h2>
          <Row className="g-4">
            {[
              "Promote access to quality education",
              "Enhance youth employability through skills training",
              "Improve community health awareness",
              "Encourage civic engagement and volunteerism",
              "Foster sustainable community development",
            ].map((item, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="h-100 objective-card shadow-sm">
                  <Card.Body className="text-center d-flex align-items-center justify-content-center">
                    <Card.Text>{item}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Container className="py-5">
        <h2 className="text-center mb-5">Leadership & Team</h2>
        <Row className="g-4">
          {[
            {
              image: leader1,
              title: "Executive Director",
              name: "Amina Yusuf",
              text: "Provides strategic leadership and oversees all foundation programs and partnerships.",
            },
            {
              image: leader2,
              title: "Program Manager",
              name: "David Johnson",
              text: "Coordinates community projects, outreach activities, and volunteer engagement.",
            },
            {
              image: leader3,
              title: "Communications Lead",
              name: "Sarah Ibrahim",
              text: "Manages public relations, digital campaigns, and stakeholder communication.",
            },
          ].map((member, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="team-card shadow h-100">
                <Card.Img
                  variant="top"
                  src={member.image}
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{member.title}</Card.Title>
                  <h6 className="text-text-dark-emphasis">{member.name}</h6>
                  <Card.Text>{member.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <section className="values-section py-5">
        <Container>
          <h2 className="text-center mb-5">Core Values</h2>
          <Row className="g-4">
            {[
              "Integrity",
              "Compassion",
              "Transparency",
              "Collaboration",
              "Innovation",
            ].map((value, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="value-card h-100">
                  <Card.Body>
                    <Card.Title>{value}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default About;
