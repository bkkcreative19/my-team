import React from "react";
import Hero from "../../components/Hero/Hero";
import Manage from "../../components/Manage/Manage";
import NavBar from "../../components/NavBar/NavBar";
import "./Home.scss";

const Home = () => {
  return (
    <div className='home'>
      <NavBar />
      <Hero />
      <Manage />
    </div>
  );
};

export default Home;
