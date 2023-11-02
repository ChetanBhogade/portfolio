import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineHome, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

import "./Footer.css";
import SocialIcons from "../Components/SocialIcons";

function Footer() {
  return (
    <footer className="footer-area">
      <Container>
        <Row>
          <Col lg="5" sm="6">
            <div className="f-about">
              <div className="f-title">
                <h3>About Me</h3>
              </div>
              <p>
                I'm a full stack developer and Proven ability in optimizing web
                & mobile functionalities that improve data retrieval and
                workflow efficiencies.
              </p>
              <p>
                Copyright &copy; {new Date().getFullYear()} | All rights
                reserved
              </p>
            </div>
          </Col>
          <Col lg="5" sm="6">
            <div className="f-address">
              <div className="f-title">
                <h3>Address</h3>
              </div>
              <div className="f-contact">
                <Row>
                  <Col sm="1" className="text-right">
                    <AiOutlineHome size="25" />
                  </Col>
                  <Col sm="11" className="text-left">
                    <h6>Maharashtra, India</h6>
                    <p>ManvelPada, Virar (East)</p>
                  </Col>
                </Row>
                {/* <Row>
                  <Col sm="1" className="text-right">
                    <AiOutlinePhone size="25" />
                  </Col>
                  <Col sm="11" className="text-left">
                    <h6>+91 8446574294</h6>
                    <p>Mon to Sat - 8am to 8pm</p>
                  </Col>
                </Row> */}
                <Row>
                  <Col sm="1" className="text-right">
                    <AiOutlineMail size="25" />
                  </Col>
                  <Col sm="11" className="text-left">
                    <a href="mailto:chetanbhogade999@gmail.com">
                      <h6>chetanbhogade999@gmail.com</h6>
                    </a>
                    <p>Ask your query anytime!</p>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col lg="2">
            <div className="f-follow">
              <div className="f-title">
                <h3>Follow Me</h3>
              </div>
              <p>Let us be social</p>
              <SocialIcons size="20" />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
