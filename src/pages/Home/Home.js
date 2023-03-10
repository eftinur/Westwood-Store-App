import React from "react";
import Announcement from "../../components/Announcement/Announcement";
import Categories from "../../components/Categories/Categories";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Header />
      <Hero />
      <Categories />
    </div>
  );
};

export default Home;
