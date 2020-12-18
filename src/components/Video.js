import React from "react";
import video from "../images/video.mov";

import "../styles/Video.css";

export default function Video() {
  return (
    <div className="video-container">
      <center>
        <video
          controls
          controlsList="nodownload"
          id="homepage-video"
          src={video}
        ></video>
      </center>
    </div>
  );
}
