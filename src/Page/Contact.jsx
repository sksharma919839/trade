import React from "react";
import Header from "../Commponants/Header/Header";
import Navbar from "../Commponants/Navbar/Navbar";
import Contactt from "../Commponants/Contact/Contact";
import Footer from "../Commponants/Footer/Footer";
import Scroll from "../Commponants/Scroll/Scroll";
import { Helmet } from "react-helmet";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact - Self Trade World</title>
      </Helmet>
      <Header />
      <Navbar />
      <Contactt />
      <Footer />
      <Scroll />
    </>
  );
}

export default Contact;
