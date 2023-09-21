import React from "react";
import MainBanner from "../../Components/MainBanner/MainBanner";
import HorizontalScroll from "../../Components/HorizontalScroll/HorizontalScroll";
import Footer from "../../Components/Footer/Footer";
import CountdownBanner from "../../Components/CountdownBanner/CountdownBanner";

const Home = () => {
  return (
    <div>
      <MainBanner />
      <HorizontalScroll />
      <CountdownBanner />
      <Footer />
    </div>
  );
};

export default Home;
