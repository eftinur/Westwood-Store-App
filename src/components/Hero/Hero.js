import React from "react";
import { GoTriangleLeft } from "react-icons/go";
import { GoTriangleRight } from "react-icons/go";
import Slider from "react-slick";
import firstImg from "../../assets/Hero/jiroe-matia-rengel-0BwMq5Qp8Lk-unsplash.jpg";
import secondImg from "../../assets/Hero/doodoosonic-0t7PNNZlTC0-unsplash.jpg";
import thirdImg from "../../assets/Hero/henry-co-SDR3oDS4mOc-unsplash.jpg";

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    fade: true,
  };
  return (
    <section className="w-full relative">
      <div className="bg-[#282828] w-full h-[800px] absolute top-0 left-0 z-10 bg-opacity-50"></div>
      <div className="">
        <Slider {...settings}>
          <img
            src={firstImg}
            className="object-cover object-bottom h-[800px] w-full"
            alt=""
          />
          <img
            src='https://images.unsplash.com/photo-1637228393246-c38a4b3d2011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            className="object-cover object-bottom h-[800px] w-full"
            alt=""
          />
          <img
            src={thirdImg}
            className="object-cover object-bottom h-[800px] w-full"
            alt=""
          />
        </Slider>
      </div>
    </section>
  );
};

export default Hero;
