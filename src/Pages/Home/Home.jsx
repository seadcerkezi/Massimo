import React from "react";
import MainBanner from "../../Components/MainBanner/MainBanner";
import HorizontalScroll from "../../Components/HorizontalScroll/HorizontalScroll";
import Footer from "../../Components/Footer/Footer";
import CountdownBanner from "../../Components/CountdownBanner/CountdownBanner";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.user.logedUser);
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
