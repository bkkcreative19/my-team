import React from "react";
import AboutHero from "../../components/AboutHero/AboutHero";
import Clients from "../../components/Clients/Clients";
import Directors from "../../components/Directors/Directors";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import GetStarted from "../../components/GetStarted/GetStarted";
import "./About.scss";

const About = () => {
  return (
    <div className='about'>
      <NavBar />
      <AboutHero />
      <Directors />
      <Clients />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default About;
