import React from "react";
import "./Video.css";
import "../App.css";
import video from "../images/video.mov";

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
