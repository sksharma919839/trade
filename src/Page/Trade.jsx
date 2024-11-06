import React from "react";
import Header from "../Commponants/Header/Header";
import Navbar from "../Commponants/Navbar/Navbar";
import Trade from "../Commponants/Trade/Trade";
import Footer from "../Commponants/Footer/Footer";
import Scroll from "../Commponants/Scroll/Scroll";
import { Helmet } from "react-helmet";

function Trad() {
  return (
    <>
      <Helmet>
        <title>Trade - Self Trade World</title>
      </Helmet>
      <Header />
      <Navbar />
      <Trade />
      <Footer />
      <Scroll />
    </>
  );
}

export default Trad;
