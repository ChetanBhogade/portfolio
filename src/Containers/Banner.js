import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Paper } from "@material-ui/core";
import Img from "../Assets/ChetanBhogade.jpg";
import { FiCalendar, FiPhone, FiMail, FiHome } from "react-icons/fi";

import "./Banner.css";

function Banner() {
  return (
    <div className="mt-5">
      <Paper elevation={3} className="p-4">
        <Row>
          <Col lg="8" sm="12" className="mx-auto">
            <Image src={Img} style={{ width: "100%" }} rounded />
          </Col>
          <Col lg="4" sm="12" className="personal-text">
            <h6>Hello Everybody, I am </h6>
            <h3>Chetan Bhogade</h3>
            <h4>Full Stack Web Developer</h4>
            <p>
              Proven ability in optimizing web functionalities that improve data
              retrieval and workflow efficiencies.
            </p>
            <ul className="list">
              <li>
                <a href="/">
                  <FiCalendar size="23" />
                  3rd August, 1999
                </a>
              </li>
              <li>
                <a href="tel:+918446574294">
                  <FiPhone size="23" />
                  +91 8446574294
                </a>
              </li>
              <li>
                <a href="mailto:chetanbhogade999@gmail.com">
                  <FiMail size="23" />
                  chetanbhogade999@gmail.com
                </a>
              </li>
              <li>
                <a href="/">
                  <FiHome size="23" />
                  Maharashtra, India
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Paper>
    </div>
  );
}

export default Banner;
