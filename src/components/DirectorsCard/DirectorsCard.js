import React from "react";
import PlusLogo from "../PlusLogo";
import "./DirectorsCard.scss";

const DirectorsCard = () => {
  return (
    <div className='directors__container-card'>
      <img src='../../assets/images/avatar-nikita.jpg' alt='aa' />
      <h3>Nikita Marks</h3>
      <p>Founder & CEO</p>
      <PlusLogo />
      <div className='circle'></div>
    </div>
  );
};

export default DirectorsCard;
