import React from "react";
import DirectorsCard from "../DirectorsCard/DirectorsCard";
import image1 from "../../assets/images/avatar-nikita.jpg";
import image2 from "../../assets/images/avatar-christian.jpg";
import image3 from "../../assets/images/avatar-cruz.jpg";
import image4 from "../../assets/images/avatar-drake.jpg";
import image5 from "../../assets/images/avatar-griffin.jpg";
import image6 from "../../assets/images/avatar-aden.jpg";
import "./Directors.scss";

const Directors = () => {
  return (
    <section className='directors'>
      <svg
        className='directors__pattern-1'
        xmlns='http://www.w3.org/2000/svg'
        width='200'
        height='200'
      >
        <g fill='none' fill-rule='evenodd'>
          <path fill='#2C6269' d='M100 100h100V0H100z' />
          <path
            fill='#012F34'
            d='M100 0C44.772 0 0 44.772 0 100s44.772 100 100 100 100-44.772 100-100S155.228 0 100 0zm0 67c18.225 0 33 14.775 33 33s-14.775 33-33 33-33-14.775-33-33 14.775-33 33-33z'
          />
          <path
            fill='#79C8C7'
            d='M100 96v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100z'
          />
          <path
            fill='#F67E7E'
            d='M196 140v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm35-8v4h4v-4h-4zm-14 0v4h4v-4h-4zm7 0v4h4v-4h-4zm-21 0v4h4v-4h-4zm7 0v4h4v-4h-4zm35 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-42 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4z'
          />
        </g>
      </svg>
      <div className='directors-head'>
        <h1>Meet the directors</h1>
      </div>
      <div className='directors__container'>
        <DirectorsCard name='Nikita Marks' job='Founder & CEO' image={image1} />
        <DirectorsCard
          name='Cristian Duncan'
          job='Co-founder & COO'
          image={image2}
        />
        <DirectorsCard
          name='Cruz Hamer'
          job='Co-founder & CTO'
          image={image3}
        />
        <DirectorsCard
          name='Drake Heaton'
          job='Business Development Lead'
          image={image4}
        />
        <DirectorsCard
          name='Griffin Wise'
          job='Lead Marketing'
          image={image5}
        />
        <DirectorsCard name='Aden Allan' job='Head of Talent' image={image6} />
      </div>

      <svg
        className='directors__pattern-2'
        xmlns='http://www.w3.org/2000/svg'
        width='147'
        height='100'
      >
        <g fill='none' fill-rule='evenodd'>
          <path fill='#002529' d='M0 100h100V0H0z' />
          <path
            fill='#79C8C7'
            d='M47 96v4h100v-4H47zm0-8v4h100v-4H47zm0-8v4h100v-4H47zm0-8v4h100v-4H47zm0-8v4h100v-4H47zm0-8v4h100v-4H47z'
          />
        </g>
      </svg>
    </section>
  );
};

export default Directors;
