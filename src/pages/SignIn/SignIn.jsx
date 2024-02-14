import React from "react";
import "./signIn.css";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Cards from "../../components/Cards/Cards";
import AddYour from "../../components/AddYour/AddYour";
import Testimonial from "../../components/Testimonial/Testimonial";
import GetStarted from "../../components/GetStarted/GetStarted";
import Footer from "../../components/Footer/Footer";
const SignIn = () => {
  return (
    <div className="signInContainer">
      <Navbar />
      <Hero />
      <Cards />
      <AddYour />
      <Testimonial />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default SignIn;
