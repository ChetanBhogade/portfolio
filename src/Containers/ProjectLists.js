import React from "react";

import "./ProjectList.css";
import ProjectAlbumView from "../Components/ProjectAlbumView";

function ProjectLists() {
  return (
    <div className="gallery-area">
      <div className="main-title">
        <h2>My Latest Projects</h2>
        <p>To Showcase My Interest of Programming World.</p>
      </div>
      <ProjectAlbumView />
    </div>
  );
}

export default ProjectLists;
