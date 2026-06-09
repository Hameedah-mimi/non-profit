import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import banner from "../assets/project-banner.png";
import "./Styles/Project.css";

const projects = [
  {
    title: "Digital Skills for Youth",
    icon: "💻",
    description:
      "This initiative focuses on equipping young people with practical digital skills that improve their employability and enable them to participate in the digital economy.",
    activities: [
      "Basic computer literacy",
      "Web development fundamentals",
      "Online communication tools",
      "Freelancing and remote work opportunities",
    ],
    extra:
      "The program also includes mentorship and career guidance to help participants transition into sustainable career paths.",
  },
  {
    title: "Back-to-School Initiative",
    icon: "📘",
    description:
      "This project addresses barriers preventing children from accessing quality education. Many families struggle to afford essential school materials, increasing dropout rates.",
    activities: [
      "School uniforms",
      "Textbooks and writing materials",
      "Financial support where necessary",
    ],
    extra:
      "We also engage parents and communities to emphasize the importance of education and encourage consistent school attendance.",
  },
  {
    title: "Community Health Outreach",
    icon: "🏥",
    description:
      "This project delivers essential healthcare services to underserved populations through periodic outreach programs.",
    activities: [
      "Free medical check-ups",
      "Distribution of basic medications",
      "Health awareness sessions",
      "Referrals for advanced care",
    ],
    extra:
      "Our outreach programs are designed to improve community health outcomes and connect individuals with long-term care solutions.",
  },
];

function Projects() {
  return (
    <div className="projects-wrapper m-0 p-0">
      <div className="projects-page">
        <section
          className="vill-section d-flex align-items-center justify-content-center text-center"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="overlay"></div>
          <Container className="baner-content">
            <h1>Our Projects</h1>
            <p>
              Discover the impactful initiatives we are driving to empower
              communities, provide essential resources, and create sustainable
              change for a better future.
            </p>
          </Container>
        </section>

        <section className="projects-section py-5">
          <Container>
            {projects.map((project, index) => (
              <Row key={index} className="mb-5 justify-content-center">
                <Col md={10}>
                  <Card className="shadow-lg border-0 rounded-4 p-4 project-card">
                    <Card.Body>
                      <h2 className="fw-bold mb-3">
                        {project.icon} {project.title}
                      </h2>

                      <p>{project.description}</p>

                      <h5 className="mt-4">Key Activities</h5>
                      <ul>
                        {project.activities.map((activity, i) => (
                          <li key={i}>{activity}</li>
                        ))}
                      </ul>

                      <p className="mt-3">{project.extra}</p>

                      <Button className="mt-3 project-btn">Learn More</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            ))}
          </Container>
        </section>
      </div>
    </div>
  );
}

export default Projects;
