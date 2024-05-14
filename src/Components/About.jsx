import React from "react";
import "./About.css";
import Education from "./Education";

function About() {
  return (
    <div className="container">
      <h3>Shrikant K Devanur</h3>
      <p className="fs-5">Fullstack Developer</p>
      <div className="row ">
        <div className="col-sm-5">
          <div className="img rounded"></div>
        </div>
        <div className="col-sm-7 demo pt-3 ">
          <p>
            A proficient Full Stack Developer with expertise spanning frontend
            and backend technologies. Demonstrates practical development
            experience and strong soft skills, alongside a steadfast dedication
            to ongoing learning. Committed to applying technical proficiency to
            deliver top-tier solutions and foster innovation.
          </p>
          <Education />
        </div>
      </div>
      
    </div>
  );
}

export default About;
