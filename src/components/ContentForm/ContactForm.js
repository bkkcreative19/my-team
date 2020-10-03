import React from "react";
import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <div class='contact-form'>
      <h2>Login to your account</h2>
      <form>
        <input type='text' name='name' placeholder='Name' />
        <input type='email' name='field2' placeholder='Email Address' />
        <input type='url' name='field3' placeholder='Website' />
        <textarea
          placeholder='Message'
          onkeyup='adjust_textarea(this)'
        ></textarea>
        <input type='button' value='Send Message' />
      </form>
    </div>
  );
};

export default ContactForm;
