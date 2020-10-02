import React from "react";
import DirectorsCard from "../DirectorsCard/DirectorsCard";
import "./Directos.scss";

const Directors = () => {
  return (
    <section className='directors'>
      <div className='directors-head'>
        <h1>Meet the directors</h1>
      </div>
      <div className='directors__container'>
        <DirectorsCard />
        <DirectorsCard />
        <DirectorsCard />
        <DirectorsCard />
        <DirectorsCard />
        <DirectorsCard />
      </div>
    </section>
  );
};

export default Directors;
