import React from "react";
import Header from "../Commponants/Header/Header";
import Navbar from "../Commponants/Navbar/Navbar";
import Hero from "../Commponants/Hero/Hero";
import Traded from "../Commponants/Hero/Traded";
import About from "../Commponants/About/About";
import Service from "../Commponants/Service/Service";
import Crypto from "../Commponants/Crypto/Crypto";
import Review from "../Commponants/Review/Review";
import Apps from "../Commponants/Appss/Apps";
import Idea from "../Commponants/Idea/Idea";
import Footer from "../Commponants/Footer/Footer";
import Scroll from "../Commponants/Scroll/Scroll";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>Self Trade World</title>
      </Helmet>
      <Header />
      <Navbar />
      <Hero />
      <Traded />
      <About />
      <Service />
      <Crypto />
      <Review />
      <Apps />
      <Idea />
      <Footer />
      <Scroll />
    </>
  );
}

export default Home;
