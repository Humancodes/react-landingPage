import React from "react";
import "./heroJoin.css";
import JoinInForm from "../JoinInForm/JoinInForm";
const HeroJoin = () => {
  return (
    <div className="heroContainerJ">
      <div className="boxContainerJ">
        <div className="textContainerJ">
          <div className="headingJ">
            Explore your{" "}
            <span style={{ color: "#0096C8", fontStyle: "italic" }}>hobby</span>{" "}
            or{" "}
            <span style={{ color: "#8064A2", fontStyle: "italic" }}>
              passion
            </span>
          </div>
          <div className="subtextJ">
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform. Your hobby may be about
            visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities…
          </div>
          <div className="subtextJ">
            If you are an expert or a seller, you can Add your Listing and
            promote yourself, your students, products, services or events. Hop
            on your hobbyhorse and enjoy the ride.
          </div>
          <div className="descMob">
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform.
          </div>
        </div>
        <div className="imgContainerJ">
          <img className="imgHeroJ" src="/assets/heroImg.png" alt="" />
        </div>
      </div>
      <div className="formContainerJ">
        <JoinInForm />
      </div>
      <div className="imgContainerMob">
        <img className="imgHeroMob" src="/assets/heroImg.png" alt="" />
      </div>
    </div>
  );
};

export default HeroJoin;
