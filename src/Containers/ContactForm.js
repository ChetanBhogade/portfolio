import React, { useState } from "react";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import { TextField, CircularProgress, Snackbar } from "@material-ui/core";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

import "./ContactForm.css";

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phoneNumber = event.target.phoneNumber.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;

    var contactFormRef = firebase.database().ref("contactMeForm");
    var newContactFormRef = contactFormRef.push();
    newContactFormRef
      .set({
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        subject: subject,
        message: message,
        date: new Date().toGMTString(),
      })
      .then(() => {
        setSuccessMsg("Form Submitted Successfully.");
        setLoading(false);
        setOpenSnackbar(true);
      })
      .catch((error) => {
        setErrorMsg("Error While Submitting Form. Try Again!!!");
        setLoading(false);
        setOpenSnackbar(true);
      });
  };

  return (
    <div className="contact-section">
      <div className="contact-title">
        <h2>Contact Me</h2>
        <p>Tell Me Your Message</p>
        <hr />
      </div>
      <Container>
        {loading ? (
          <div className="text-center my-5">
            <CircularProgress size={80} />
          </div>
        ) : (
          <Row className="my-5">
            <Col md="8" className="mx-auto">
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
                className="bg-white p-3 shadow contact-form"
              >
                <TextField
                  fullWidth
                  required
                  id="name"
                  type="text"
                  label="Your Name"
                  variant="outlined"
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
                {/* <p
                  style={{ fontSize: "10px", opacity: "0.8" }}
                  className="text-right"
                >
                  Note: - If you not getting any response within 48 Hours then,
                  try contacting me through my Mobile Number
                </p> */}
              </form>
            </Col>
          </Row>
        )}
      </Container>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => {
          setOpenSnackbar(false);
        }}
        key="bottom-right"
      >
        <Alert
          onClose={() => {
            setOpenSnackbar(false);
          }}
          variant={successMsg ? "success" : "danger"}
          dismissible
        >
          {successMsg ? successMsg : errorMsg}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ContactForm;
