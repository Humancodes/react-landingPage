import React from "react";
import "./hero.css";
import SignInForm from "../SignInForm/SignInForm";
const Hero = () => {
  return (
    <div className="heroContainer">
      <div className="boxContainer">
        <div className="textContainer">
          <div className="headingS">
            Explore your{" "}
            <span style={{ color: "#0096C8", fontStyle: "italic" }}>hobby</span>{" "}
            or{" "}
            <span style={{ color: "#8064A2", fontStyle: "italic" }}>
              passion
            </span>
          </div>
          <div className="subtext">
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform. Your hobby may be about
            visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities…
          </div>
          <div className="subtext">
            If you are an expert or a seller, you can Add your Listing and
            promote yourself, your students, products, services or events. Hop
            on your hobbyhorse and enjoy the ride.
          </div>
          <div className="descMobS">
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform.
          </div>
        </div>
        <div className="imgContainerS">
          <img className="imgHeroS" src="/assets/heroImg.png" alt="" />
        </div>
      </div>
      <div className="formContainerS">
        <SignInForm />
      </div>
      <div className="imgContainerMobS">
        <img className="imgHeroMobS" src="/assets/heroImg.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
