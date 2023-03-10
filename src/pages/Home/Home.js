import React from "react";
import Announcement from "../../components/Announcement/Announcement";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Newsletter from "../../components/Newsletter/Newsletter";
import Products from "../../components/Products/Products";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Products />
      <Newsletter />
    </div>
  );
};

export default Home;
