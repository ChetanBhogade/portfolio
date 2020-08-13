import React from "react";

import "./ContactForm.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { TextField } from "@material-ui/core";

function ContactForm() {

  const handleSubmit = (event) => {
    event.preventDefault()
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phoneNumber = event.target.phoneNumber.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;
  }

  return (
    <div className="contact-section">
      <div className="contact-title">
        <h2>Contact Me</h2>
        <p>Tell Me Your Message</p>
        <hr />
      </div>
      <Container>
        <Row className="my-5">
          <Col md="8" className="mx-auto">
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
              className="bg-white p-4 shadow contact-form"
            >
              <TextField
                fullWidth
                required
                id="name"
                type="text"
                label="Your Name"
                variant="outlined"
                autoFocus
              />
              <br /> <br />
              <TextField
                fullWidth
                required
                id="email"
                type="email"
                label="Your Email"
                variant="outlined"
              />
              <br /> <br />
              <TextField
                fullWidth
                required
                id="phoneNumber"
                type="text"
                label="Phone Number"
                variant="outlined"
              />
              <br /> <br />
              <TextField
                fullWidth
                required
                id="subject"
                type="text"
                label="Subject"
                variant="outlined"
              />
              <br /> <br />
              <TextField
                fullWidth
                required
                id="message"
                label="Message"
                multiline
                rows={6}
                variant="outlined"
              />
              <br /> <br />
              <Button
                variant="success"
                className="custom-btn"
                size="lg"
                type="submit"
                block
              >
                Submit
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactForm;
