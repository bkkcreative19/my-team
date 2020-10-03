import React from "react";
import ContactContent from "../../components/ContactContent/ContactContent";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className='contact'>
      <NavBar />
      <ContactContent />
      <Footer />
    </div>
  );
};

export default Contact;
