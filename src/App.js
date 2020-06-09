import React from "react";
import Header from "./Containers/Header";
import { Container } from "@material-ui/core";
import Banner from "./Containers/Banner";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Banner />
        <h1>Chetan Bhogade</h1>
        <p>Full Stack Web Developer</p>
      </Container>
    </div>
  );
}

export default App;
