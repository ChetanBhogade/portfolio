import React, { useEffect, useState } from "react";
import SimpleTabs from "../Components/SimpleTabs";
import * as firebase from "firebase";
import { CircularProgress } from "@material-ui/core";

import "./ProjectList.css";

function ProjectLists() {
  const [myData, setMyData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const starCountRef = firebase.database().ref("project");
    starCountRef.on("value", (snapshot) => {
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
