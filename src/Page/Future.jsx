import React from "react";
import Header from "../Commponants/Header/Header";
import Navbar from "../Commponants/Navbar/Navbar";
import Future from "../Commponants/Future/Future";
import Footer from "../Commponants/Footer/Footer";
import Scroll from "../Commponants/Scroll/Scroll";
import { Helmet } from "react-helmet";

function Futur() {
  return (
    <>
      <Helmet>
        <title>Future - Self Trade World</title>
      </Helmet>
      <Header />
      <Navbar />
      <Future />
      <Footer />
      <Scroll />
    </>
  );
}

export default Futur;
