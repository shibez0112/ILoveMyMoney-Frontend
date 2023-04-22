import React from "react";

import Navbar from "../components/Navbar/Navbar";
import HomeBody from "../components/Home/HomeBody";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet/>
      </main>
    </>
  );
};

export default Home;
