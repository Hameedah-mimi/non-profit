import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaBookOpen, FaLaptopCode, FaHeartbeat } from "react-icons/fa";
import { FaHandsHelping, FaUsers, FaBullseye } from "react-icons/fa";
import { FaEye, FaLeaf, FaHandshake } from "react-icons/fa";
import Image from "../assets/imported.png";
import "./Styles/Body.css";

const Body = () => {
  return (
    <>
      <section className="hero-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="display-4 fw-bold body-text">
                UnityBridge Foundation
              </h1>
              <p className="lead mt-3 body-text">
                Connecting underserved communities with opportunities,
                resources, and support systems that foster sustainable growth
                and development.
              </p>
              <Button className="body-button">Get Involved</Button>
            </Col>

            <Col lg={6}>
              <img
                src={Image}
                alt="ngo"
                className="img-fluid rounded-4 shadow-lg"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <h2 className="section-title text-center">Who We Are</h2>
          <p className="text-center body-text">
            UnityBridge Foundation is a non-governmental, non-profit
            organization dedicated to improving the lives of underserved
            individuals and communities through sustainable and impactful
            initiatives.
          </p>

          <p className="body-text">
            Founded on the principles of unity, compassion, and shared
            responsibility, the organization serves as a bridge connecting those
            in need with opportunities, resources, and support systems that
            foster growth and development.
          </p>

          <p className="body-text">
            We recognize that many communities face systemic challenges such as
            limited access to quality education, unemployment, poor healthcare
            access, and lack of social support structures. Rather than temporary
            fixes, UnityBridge focuses on long-term solutions that empower
            individuals to become self-reliant contributors to their
            communities.
          </p>
        </Container>
      </section>

      <section className="bg-light py-5">
        <Container>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="shadow border-0 h-100 p-4 rounded-4">
                <FaBullseye className="icon" />
                <h3>Our Mission</h3>
                <p>
                  To bridge societal and economic gaps by providing access to
                  education, capacity-building programs, and essential resources
                  that empower individuals and strengthen communities.
                </p>
                <ul>
                  <li>Equip young people with relevant modern skills</li>
                  <li>Improve education access for disadvantaged children</li>
                  <li>Support community-led initiatives</li>
                  <li>Promote volunteerism and social responsibility</li>
                </ul>
              </Card>
            </Col>

            <Col md={6} className="mb-4">
              <Card className="shadow border-0 h-100 p-4 rounded-4">
                <FaEye className="icon" />
                <h3>Our Vision</h3>
                <p>
                  A society where every individual regardless of background,
                  location, or circumstance has equal access to opportunities.
                </p>
                <ul>
                  <li>No child denied education due to finances</li>
                  <li>Youth equipped for economic independence</li>
                  <li>Inclusive and resilient communities</li>
                </ul>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <h2 className="section-title text-center">Our Approach</h2>

          <Row className="mt-4">
            <Col md={3} className="mb-4">
              <Card className="approach-card text-center p-4 shadow-sm">
                <FaUsers className="icon" />
                <h5>Community Engagement</h5>
                <p>
                  Working closely with local leaders to identify real needs.
                </p>
              </Card>
            </Col>

            <Col md={3} className="mb-4">
              <Card className="approach-card text-center p-4 shadow-sm">
                <FaBookOpen className="icon" />
                <h5>Capacity Building</h5>
                <p>Empowering people with knowledge and practical skills.</p>
              </Card>
            </Col>

            <Col md={3} className="mb-4">
              <Card className="approach-card text-center p-4 shadow-sm">
                <FaLeaf className="icon" />
                <h5>Sustainability</h5>
                <p>Programs designed for long-term impact and continuity.</p>
              </Card>
            </Col>

            <Col md={3} className="mb-4">
              <Card className="approach-card text-center p-4 shadow-sm">
                <FaHandshake className="icon" />
                <h5>Partnerships</h5>
                <p>Collaborating with organizations and institutions.</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bg-light py-5">
        <Container>
          <h2 className="section-title text-center">Our Programs</h2>

          <Row className="mt-4">
            <Col lg={6} className="mb-4">
              <Card className="program-card p-4 shadow border-0">
                <FaBookOpen className="icon" />
                <h4>Education Support Program</h4>
                <p>
                  School supplies, scholarships, mentorship, workshops, and
                  career guidance for children from low-income families.
                </p>
              </Card>
            </Col>

            <Col lg={6} className="mb-4">
              <Card className="program-card p-4 shadow border-0">
                <FaLaptopCode className="icon" />
                <h4>Youth Empowerment & Digital Skills</h4>
                <p>
                  Computer literacy, web development, and online
                  entrepreneurship training to reduce unemployment.
                </p>
              </Card>
            </Col>

            <Col lg={6} className="mb-4">
              <Card className="program-card p-4 shadow border-0">
                <FaHeartbeat className="icon" />
                <h4>Community Health Initiatives</h4>
                <p>
                  Free screenings, health education, referrals, hygiene and
                  preventive healthcare campaigns.
                </p>
              </Card>
            </Col>

            <Col lg={6} className="mb-4">
              <Card className="program-card p-4 shadow border-0">
                <FaHandsHelping className="icon" />
                <h4>Community Development Projects</h4>
                <p>
                  Clean water access, sanitation projects, and small-scale
                  infrastructure improvements.
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="impact-section py-5">
        <Container>
          <h2 className="text-center mb-5">Our Impact</h2>
          <Row className="text-center">
            <Col md={3}>
              <h1>2,500+</h1>
              <p>Individuals Directly Impacted</p>
            </Col>
            <Col md={3}>
              <h1>300+</h1>
              <p>Volunteers</p>
            </Col>
            <Col md={3}>
              <h1>50+</h1>
              <p>Projects Implemented</p>
            </Col>
            <Col md={3}>
              <h1>1000+</h1>
              <p>Indirect Beneficiaries</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 text-center">
        <Container>
          <h2>Be Part of the Change</h2>
          <p className="body-text">
            Whether you volunteer, donate, or partner with us, your involvement
            helps extend our reach and deepen our impact.
          </p>
          <Button className="body-button">Donate Now</Button>
        </Container>
      </section>
    </>
  );
};

export default Body;
