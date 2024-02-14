import React from "react";
import "./getStarted.css";
const GetStarted = () => {
  return (
    <div className="mainGetContainer">
      <div className="getStartedCont">
        <div className="heading">
          Your <span style={{ color: "#0096C8" }}>Hobby</span>, Your
          <span style={{ color: "#8064A2" }}> Community...</span>
        </div>
        <button className="startBtn">Get Started</button>
        <div className="imgContainer">
          <img className="imgGetStarted" src="/assets/img2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
