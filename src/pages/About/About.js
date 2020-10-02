import React from "react";
import AboutHero from "../../components/AboutHero/AboutHero";
import Directors from "../../components/Directors/Directors";
import NavBar from "../../components/NavBar/NavBar";
import "./About.scss";

const About = () => {
  return (
    <div className='about'>
      <NavBar />
      <AboutHero />
      <Directors />
    </div>
  );
};

export default About;
