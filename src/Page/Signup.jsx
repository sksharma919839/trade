import React from "react";
import Header from "../Commponants/Header/Header";
import Navbar from "../Commponants/Navbar/Navbar";
import Signin from "../Commponants/Signin/Signin";
import Footer from "../Commponants/Footer/Footer";
import Scroll from "../Commponants/Scroll/Scroll";
import { Helmet } from "react-helmet";

function Signup() {
  return (
    <>
      <Helmet>
        <title>Sign Up - Self Trade World</title>
      </Helmet>
      <Header />
      <Navbar />
      <Signin />
      <Footer />
      <Scroll />
    </>
  );
}

export default Signup;
