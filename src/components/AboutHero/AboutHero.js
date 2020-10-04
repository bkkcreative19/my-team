import React from "react";
import "./AboutHero.scss";

const AboutHero = () => {
  return (
    <section className='about-hero'>
      <div className='about-hero__content'>
        <div className='about-hero__content-head'>
          <h1>About</h1>
        </div>

        <div className='about-hero__content-text'>
          <p>
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation
            and deliver incredible outcomes. Talented, diverse teams shape the
            best products and experiences. We’ll bring those teams to you.
          </p>
        </div>
      </div>

      <svg
        className='about-hero__pattern-2'
        xmlns='http://www.w3.org/2000/svg'
        width='200'
        height='200'
      >
        <g fill='none' fillRule='evenodd'>
          <path fill='#2C6269' d='M100 100H0V0h100z' />
          <path
            fill='#F67E7E'
            d='M100 0c55.228 0 100 44.772 100 100s-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0zm0 67c-18.225 0-33 14.775-33 33s14.775 33 33 33 33-14.775 33-33-14.775-33-33-33z'
          />
          <path
            fill='#79C8C7'
            d='M100 40v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0V8h100zm0-8v4H0V0h100z'
          />
        </g>
      </svg>
    </section>
  );
};

export default AboutHero;
