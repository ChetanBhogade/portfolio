import React from "react";
import { Row, Col } from "react-bootstrap";
import { DiDatabase } from "react-icons/di";
import { FaUsers } from "react-icons/fa";

import "./About.css";

function About() {
  const iconSize = 50;
  const aboutItems = [
    {
      icon: <DiDatabase size={iconSize} />,
      number: 14,
      desc: "Total Projects",
    },
    { icon: <FaUsers size={iconSize} />, number: 14, desc: "Total Clients" },
  ];
  return (
    <Row className="about">
      <Col lg="6">
        <div>
          <h4>About Myself</h4>
          <p>
            I'm a Full Stack Web developer. <br />
            A hardworking person who is attentive to details and focused on the
            quality of work. I like to learn the latest technologies and
            continuously improves myself, always try to help other people.
            <br />
            My knowledge of Python and JavaScript will help me to create a
            product that will meet your expectations. <br />
            CORE Expertise in Web Development with Django. Whether You’ve lost
            your original developer, require additional work, or need a brand
            new app/web front-end/back-end, I can step in and take over wherever
            YOU need.
          </p>
          <Row>
            {aboutItems.map((item, index) => {
              return (
                <Col key={index}>
                  <div className="about-item text-center">
                    {item.icon}
                    <h4>{item.number}</h4>
                    <p>{item.desc}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </Col>
      <Col lg="6">
        <h5>Skill Section</h5>
      </Col>
    </Row>
  );
}

export default About;
