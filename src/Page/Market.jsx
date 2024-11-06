import React from "react";
import Header from "../Commponants/Header/Header";
import Navbar from "../Commponants/Navbar/Navbar";
import Market from "../Commponants/Market/Market";
import Footer from "../Commponants/Footer/Footer";
import Scroll from "../Commponants/Scroll/Scroll";
import { Helmet } from "react-helmet";

function Markett() {
  return (
    <>
      <Helmet>
        <title>Market - Self Trade World</title>
      </Helmet>
      <Header />
      <Navbar />
      <Market />
      <Footer />
      <Scroll />
    </>
  );
}

export default Markett;
