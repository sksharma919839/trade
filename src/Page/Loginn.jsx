import React from "react";
import Header from "../Commponants/Header/Header";
import Navbar from "../Commponants/Navbar/Navbar";
import Login from "../Commponants/Login/Login";
import Footer from "../Commponants/Footer/Footer";
import Scroll from "../Commponants/Scroll/Scroll";
import { Helmet } from "react-helmet";

function Loginn() {
  return (
    <>
      <Helmet>
        <title>Login - Self Trade World</title>
      </Helmet>
      <Header />
      <Navbar />
      <Login />
      <Footer />
      <Scroll />
    </>
  );
}

export default Loginn;
