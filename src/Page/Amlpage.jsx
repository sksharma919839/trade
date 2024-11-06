import React from "react";
import Header from "../Commponants/Header/Header";
import Navbar from "../Commponants/Navbar/Navbar";
import Aml from "../Commponants/Aml/Aml";
import Footer from "../Commponants/Footer/Footer";
import Scroll from "../Commponants/Scroll/Scroll";
import { Helmet } from "react-helmet";

function Amlpage() {
  return (
    <>
      <Helmet>
        <title>AML Policy - Self Trade World</title>
      </Helmet>
      <Header />
      <Navbar />
      <Aml />
      <Footer />
      <Scroll />
    </>
  );
}

export default Amlpage;
