import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroJoin from "../../components/HeroJoin/HeroJoin";
import Cards from "../../components/Cards/Cards";
import AddYour from "../../components/AddYour/AddYour";
import Testimonial from "../../components/Testimonial/Testimonial";
import GetStarted from "../../components/GetStarted/GetStarted";
import Footer from "../../components/Footer/Footer";

const JoinIn = () => {
  return (
    <div>
      <Navbar />
      <HeroJoin />
      <Cards />
      <AddYour />
      <Testimonial />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default JoinIn;
