import React from "react";
import Header from "./Containers/Header";
import { Container } from "@material-ui/core";
import Banner from "./Containers/Banner";
import About from "./Containers/About";
import ProjectLists from "./Containers/ProjectLists";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Banner />
        <About />
        <ProjectLists />
      </Container>
    </div>
  );
}

export default App;
