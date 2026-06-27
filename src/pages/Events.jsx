import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Col, Card } from "react-bootstrap";
import { Button, Modal, Form } from "react-bootstrap";
import { motion } from "framer-motion";
import Calendar from "react-calendar";
import medic from "../assets/medical-help.png";
import health from "../assets/health-outreach.png";
import "react-calendar/dist/Calendar.css";
import EventCard from "../components/EventCard";
import "./Event.css";

const upcomingEvents = [
  {
    title: "Community Health Outreach",
    date: "June 20, 2026",
    description:
      "Free medical outreach program providing screenings and wellness education.",
    outcome: "Improved healthcare awareness in underserved communities.",
    guidelines: "Registration required for all volunteers and attendees.",
  },
  {
    title: "Youth Skills Development Workshop",
    date: "July 5, 2026",
    description:
      "Training on tech skills, entrepreneurship, and career readiness.",
    outcome: "Empowering 200+ youths with employable skills.",
    guidelines: "Open to young adults aged 16–30.",
  },
];

const pastEvents = [
  {
    title: "Back to School Drive",
    summary: "Distributed school supplies, uniforms, and books to children.",
    impact: "Reached 350 children across 5 communities.",
    testimonial:
      "This support helped my children return to school confidently.",
    image: medic,
  },
  {
    title: "Community Health Outreach",
    summary:
      "Provided free health screenings, consultations, and medications to residents in underserved communities.",
    impact:
      "Over 500 residents received free medical attention and health education.",
    testimonial:
      "The outreach helped my family access medical care we could not afford before.",
    image: health,
  },
];

function Events() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("");

  const handleShow = (eventTitle) => {
    setSelectedEvent(eventTitle);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <>
      <div className="events-page">
        <section className="calendar-section section-space">
          <div className="calendar-header">
            <h1>Events Calendar</h1>
            <p>
              Stay updated with our outreach programs, workshops, and community
              development initiatives.
            </p>
          </div>

          <div className="calendar-layout">
            <div className="calendar-wrapper">
              <Calendar onChange={setDate} value={date} />
            </div>

            <div className="calendar-info">
              <h3>Upcoming Programs</h3>
              <p>Explore our scheduled events and community activities.</p>

              <ul>
                {upcomingEvents.map((event, index) => (
                  <li key={index}>
                    <strong>{event.title}</strong>
                    <span>{event.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section-space">
          <h2 className="section-title">Upcoming Events</h2>

          <div className="cards-grid">
            {upcomingEvents.map((event, index) => (
              <EventCard
                key={index}
                event={event}
                type="upcoming"
                onRegister={handleShow}
              />
            ))}
          </div>
        </section>

        <section className="section-space">
          <h2 className="section-title">Past Events</h2>

          <div className="cards-grid">
            {pastEvents.map((event, index) => (
              <EventCard key={index} event={event} type="past" />
            ))}
          </div>
        </section>

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Register for {selectedEvent}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Enter phone number" />
              </Form.Group>

              <Button className="submit-btn w-100">Submit Registration</Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default Events;
