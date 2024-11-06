import React from "react";
import Header from "../Commponants/Header/Header";
import Navbar from "../Commponants/Navbar/Navbar";
import Privacy from "../Commponants/Privacy/Privacy";
import Footer from "../Commponants/Footer/Footer";
import Scroll from "../Commponants/Scroll/Scroll";
import { Helmet } from "react-helmet";

function Privacypage() {
  return (
    <>
      <Helmet>
        <title>Privacy Police - Self Trade World</title>
      </Helmet>
      <Header />
      <Navbar />
      <Privacy />
      <Footer />
      <Scroll />
    </>
  );
}

export default Privacypage;
