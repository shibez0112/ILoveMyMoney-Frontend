import React from "react";

import Navbar from "../components/Navbar/Navbar";
import HomeBody from "../components/Home/HomeBody";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HomeBody />
      </main>
    </>
  );
};

export default Home;
