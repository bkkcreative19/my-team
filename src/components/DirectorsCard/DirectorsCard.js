import React from "react";
import PlusLogo from "../PlusLogo";
import "./DirectorsCard.scss";

const DirectorsCard = ({ name, job, image }) => {
  return (
    <div className='directors__container-card'>
      <img src={image} alt='' />
      <h3>{name}</h3>
      <p>{job}</p>
      <PlusLogo />
      <div className='circle'></div>
    </div>
  );
};

export default DirectorsCard;
