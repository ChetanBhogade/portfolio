import React, { useEffect, useState } from "react";
import SimpleTabs from "../Components/SimpleTabs";
import * as firebase from "firebase";
import { CircularProgress } from "@material-ui/core";

import "./ProjectList.css";

import CardGameImg from "../Assets/Projects/CardMemoryGame.png";
import eCommImg from "../Assets/Projects/eComm.png";
import EventImg from "../Assets/Projects/EventCountdown.png";
import NccImg from "../Assets/Projects/NccManagement.png";
import TtsImg from "../Assets/Projects/TextToSpeech.png";
import RedFruitImg from "../Assets/Projects/RedFruitAgro.png";
import IpInfo from "../Assets/Projects/IP-Information.jpg";

const data = [
  {
    name: "Red Fruit Agro",
    description:
      "A Website with the integrstion of React and Django. Contains Rest API, Redux, Custom User Model, Custom User Authentication and many More",
    image: RedFruitImg,
    visit: "https://redfruitagro.com/",
    src: null,
    language: ["ReactJs", "Django", "Python", "Django-Rest", "JavaScript"],
  },
  {
    name: "E-Commerce Website - 'eComm'",
    description:
      "Basic eCommerce website with the implementation of some Analytics based on views, time and amount purchased.",
    image: eCommImg,
    visit: "http://chetanbhogade.pythonanywhere.com/",
    src: "https://github.com/ChetanBhogade/E-Commerce-Project",
    language: ["Django", "Python", "JavaScript"],
  },
  {
    name: "Card-Memory Game",
    description:
      "A game where you have to click on a card to see what icon is underneath it and try to find the matching icon underneath the other cards.",
    image: CardGameImg,
    visit: "https://chetanbhogade.github.io/card-memory-game/",
    src: "https://github.com/ChetanBhogade/card-memory-game",
    language: ["ReactJs", "JavaScript"],
  },
  {
    name: "Event Countdown",
    description:
      "Continuously decrementing countdown timer to a user entered event.",
    image: EventImg,
    visit: "https://chetanbhogade.github.io/Event-Countdown/",
    src: "https://github.com/ChetanBhogade/Event-Countdown",
    language: ["ReactJs", "JavaScript"],
  },
  {
    name: "Ncc Management",
    description:
      "All Ncc related paper works are try to make digital. All CRUD operations are performed.",
    image: NccImg,
    visit: null,
    src: "https://github.com/ChetanBhogade/NCC-Management",
    language: ["Asp.Net"],
  },
  {
    name: "Text-To-Speech",
    description:
      "This software can read text from input field and can also read whole text file.",
    image: TtsImg,
    visit: null,
    src:
      "https://github.com/ChetanBhogade/TextToSpeech/blob/master/TextToSpeech.py",
    language: ["Python"],
  },
  {
    name: "IP-Information",
    description:
      "Mobile application for getting an IP address information on android and iOS.",
    image: IpInfo,
    visit: null,
    src: "https://github.com/ChetanBhogade/ip-information",
    language: ["JavaScript", "React-Native"],
  },
];

function ProjectLists() {
  const [myData, setMyData] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(myData);

  useEffect(() => {
    console.log("effect called...");
    const starCountRef = firebase.database().ref("portfolio/");
    starCountRef.on("value", (snapshot) => {
      // console.log(snapshot.val())
      snapshot.forEach((childSnapshot) => {
        // key will be "ada" the first time and "alan" the second time
        const key = childSnapshot.key;
        // childData will be the actual contents of the child
        const childData = childSnapshot.val();

        setMyData((m) => [...m, { key: key, ...childData }]);
      });
      setLoading(false);
    });
  }, []);
  return (
    <div id="project" className="gallery-area">
      <div className="main-title">
        <h2>My Latest Projects</h2>
        <p>To Showcase My Interest of Programming World.</p>
      </div>
      {loading ? (
        <div className="col-md-4 text-center mx-auto">
          <CircularProgress size={50} />
        </div>
      ) : (
        <SimpleTabs data={myData} />
      )}
    </div>
  );
}

export default ProjectLists;
