import React from "react";
import Header from "./Containers/Header";
import { Container } from "@material-ui/core";
import Banner from "./Containers/Banner";
import About from "./Containers/About";
import ProjectLists from "./Containers/ProjectLists";
import Footer from "./Containers/Footer";
import * as firebase from "firebase";
import { firebaseConfig } from "./Config"

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Banner />
        <About />
        <ProjectLists />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
