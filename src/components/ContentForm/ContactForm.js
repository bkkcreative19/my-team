import React from "react";
import Button from "../Button/Button";
import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <form className='contact-form'>
      <div className='contact-form__container'>
        <input className='test' type='text' placeholder='Name' />
        <input type='email' placeholder='Email Address' />
        <input type='text' placeholder='Company Name' />
        <input type='text' placeholder='Title' />
        <input className='message' type='text' placeholder='Message' />
        <Button color='#004047' bgColor='#fff' text='submit' />
      </div>
    </form>
  );
};

export default ContactForm;
