import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { DiDatabase } from "react-icons/di";
import { FaUsers } from "react-icons/fa";
import ProgressBar from "../Components/ProgressBar";
import * as firebase from "firebase";
import { CircularProgress } from "@material-ui/core";

import "./About.css";

const iconSize = 50;
const aboutItems = [
  {
    icon: <DiDatabase size={iconSize} />,
    number: 16,
    desc: "Total Projects",
  },
  { icon: <FaUsers size={iconSize} />, number: 6, desc: "Total Clients" },
];

export class About extends Component {
  constructor(props) {
    super(props);

    this.mySkills = [];

    this.state = {
      progressData: this.mySkills.map((item) => ({ ...item, progress: 0 })),
      loading: true,
    };
  }

  componentDidMount() {
    const starCountRef = firebase.database().ref("mySkills");
    starCountRef.on("value", (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        // key will be "ada" the first time and "alan" the second time
        const key = childSnapshot.key;
        // childData will be the actual contents of the child
        const childData = childSnapshot.val();

        this.mySkills = [...this.mySkills, { key: key, ...childData }];
      });

      this.setState({
        progressData: this.mySkills.map((item) => ({ ...item, progress: 0 })),
        loading: false,
      });
      this.timer = setTimeout(() => this.progress(4), 100);
    });
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completion) {
    let done = 0;
    this.setState({
      progressData: this.mySkills.map((item, i) => {
        const { progress: current } = this.state.progressData[i];
        const { progress: max } = item;
        if (current + completion >= max) {
          done += 1;
        }
        return {
          ...item,
          progress: Math.min(current + completion, max),
        };
      }),
    });
    if (done < this.mySkills.length) {
      this.timer = setTimeout(() => this.progress(4), 100);
    }
  }

  render() {
    return (
      <Row id="about" className="about">
        <Col lg="6" className="pr-5">
          <div>
            <h4>About Myself</h4>
            <p className="my-info">
              Hi, I'm Chetan and I am a Full Stack Web Developer. <br />
              I create Front-end components, such as User Interfaces and
              Back-end components, such as Application Code and Databases.
              <br />
              I like to learn the latest technologies and continuously improves
              myself. I always try to help other people.
              <br />
              My knowledge of Python and JavaScript will help me to create a
              product that will meet your expectations. <br />
              My Core Expertise in Web Development with Django.
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
        <Col lg="6" className="pl-3 my-auto">
          {this.state.loading ? (
            <div className="col-md-3 text-center mx-auto my-auto">
              <CircularProgress size={50} />
            </div>
          ) : (
            <div className="skill">
              {this.state.progressData.map((item, index) => {
                return (
                  <div key={index} className="skill-item">
                    <h4>
                      {item.name} - {item.progress}%
                    </h4>
                    <div className="progress-bar">
                      <ProgressBar value={item.progress} />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </Col>
      </Row>
    );
  }
}

export default About;
