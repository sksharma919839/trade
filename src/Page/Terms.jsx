import React from "react";
import Header from "../Commponants/Header/Header";
import Navbar from "../Commponants/Navbar/Navbar";
import Terms from "../Commponants/Termscondition/Terms";
import Footer from "../Commponants/Footer/Footer";
import Scroll from "../Commponants/Scroll/Scroll";
import { Helmet } from "react-helmet";

function Term() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions - Self Trade World</title>
      </Helmet>
      <Header />
      <Navbar />
      <Terms />
      <Footer />
      <Scroll />
    </>
  );
}

export default Term;
