import React from "react";

import Jumbotron from "./jumbotron";
import Footer from "./footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar";
import Card from "./card";

//create your first component
const Home = () => {
  return (
    <>
      <Navbar />
      <div class="container">
        <Jumbotron />
        <div className="d-flex justify-content-around flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
