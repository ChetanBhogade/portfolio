import React from "react";
import Header from "./Containers/Header";
import { Container } from "@material-ui/core";
import Banner from "./Containers/Banner";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import About from "./Containers/About";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Banner />
        <About />
      </Container>
    </div>
  );
}

export default App;
