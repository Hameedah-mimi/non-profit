import React from "react";
import { Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "../App.css";

function EventCard({ event, type, onRegister }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }}>
      <Card className="event-card shadow h-100">
        {event.image && (
          <Card.Img
            variant="top"
            src={event.image}
            style={{ height: "200px", objectFit: "cover" }}
          />
        )}

        <Card.Body className="d-flex flex-column">
          <Card.Title>{event.title}</Card.Title>

          <p>
            <strong>Date:</strong> {event.date}
          </p>

          {type === "upcoming" && (
            <>
              <p>{event.description}</p>
              <p>
                <strong>Expected Outcome:</strong> {event.outcome}
              </p>
              <p>
                <strong>Guidelines:</strong> {event.guidelines}
              </p>

              <Button
                className="register-btn mt-auto"
                onClick={() => onRegister(event.title)}
              >
                Register
              </Button>
            </>
          )}

          {type === "past" && (
            <>
              <p>
                <strong>Summary:</strong> {event.summary}
              </p>
              <p>
                <strong>Impact:</strong> {event.impact}
              </p>
              <p className="testimonial">
                <strong>Testimonial:</strong> {event.testimonial}
              </p>
            </>
          )}
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default EventCard;
