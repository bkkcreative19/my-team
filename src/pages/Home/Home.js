import React from "react";
import Hero from "../../components/Hero/Hero";
import NavBar from "../../components/NavBar/NavBar";
import "./Home.scss";

const Home = () => {
  return (
    <div className='home'>
      <NavBar />
      <Hero />
    </div>
  );
};

export default Home;
