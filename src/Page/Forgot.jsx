import React from "react";
import Header from "../Commponants/Header/Header";
import Navbar from "../Commponants/Navbar/Navbar";
import Passforgot from "../Commponants/Forgot/Passforgot";
import Footer from "../Commponants/Footer/Footer";
import Scroll from "../Commponants/Scroll/Scroll";
import { Helmet } from "react-helmet";

function Forgot() {
  return (
    <>
      <Helmet>
        <title>Forgot Password - Self Trade World</title>
      </Helmet>
      <Header />
      <Navbar />
      <Passforgot />
      <Footer />
      <Scroll />
    </>
  );
}

export default Forgot;
