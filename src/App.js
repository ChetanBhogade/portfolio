import React from "react";
import Header from "./Containers/Header";
import { Container } from "@material-ui/core";
import Banner from "./Containers/Banner";
import About from "./Containers/About";
import ProjectLists from "./Containers/ProjectLists";
import Footer from "./Containers/Footer";
import firebase from "firebase/compat/app";
import { firebaseConfig } from "./Config";
import ContactForm from "./Containers/ContactForm";
import "firebase/compat/analytics";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

firebase.initializeApp(firebaseConfig);
firebase.analytics();

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Banner />
        <About />
        <ProjectLists />
        <ContactForm />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
