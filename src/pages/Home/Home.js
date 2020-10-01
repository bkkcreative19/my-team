import React from "react";
import Footer from "../../components/Footer/Footer";
import GetStarted from "../../components/GetStarted/GetStarted";
import Hero from "../../components/Hero/Hero";
import Manage from "../../components/Manage/Manage";
import NavBar from "../../components/NavBar/NavBar";
import Testimonials from "../../components/Testimonials/Testimonials";
import "./Home.scss";

const Home = () => {
  return (
    <div className='home'>
      <NavBar />
      <Hero />
      <Manage />
      <Testimonials />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Home;
