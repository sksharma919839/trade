import React from "react";
import Header from "../Commponants/Header/Header";
import Navbar from "../Commponants/Navbar/Navbar";
import Kyc from "../Commponants//Kyc/Kyc";
import Footer from "../Commponants/Footer/Footer";
import Scroll from "../Commponants/Scroll/Scroll";
import { Helmet } from "react-helmet";

function Kycpage() {
  return (
    <>
      <Helmet>
        <title>KYC Policy - Self Trade World</title>
      </Helmet>
      <Header />
      <Navbar />
      <Kyc />
      <Footer />
      <Scroll />
    </>
  );
}

export default Kycpage;
