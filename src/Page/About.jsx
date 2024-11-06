import React from "react";
import Header from "../Commponants/Header/Header";
import Navbar from "../Commponants/Navbar/Navbar";
import Aboutpage from "../Commponants/Aboutpage/Aboutpage";
import Footer from "../Commponants/Footer/Footer";
import Scroll from "../Commponants/Scroll/Scroll";
import { Helmet } from "react-helmet";

function About() {
  return (
    <>
      <Helmet>
        <title>About Us - Self Trade World</title>
      </Helmet>
      <Header />
      <Navbar />
      <Aboutpage />
      <Footer />
      <Scroll />
    </>
  );
}

export default About;
