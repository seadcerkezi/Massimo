import React from "react";
import offerProduct from "../../OfferImages/offerProduct.png";
import offerBG from "../../OfferImages/offerBg.png";
import "./countdown.scss";
import { NavLink } from "react-router-dom";
import { Statistic } from "antd";
const { Countdown } = Statistic;

const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK

const onFinish = () => {
  console.log("finished!");
};

const CountdownBanner = () => {
  const divStyle = {
    backgroundImage: `url(${offerBG})`,
  };
  return (
    <div className="countdown-container" style={divStyle}>
      <div className="countdown-text">
        <h4>Delicious Burger & French Fry</h4>
        <p>
          Progressively simplify effective e-toilers and process0centric methods
          of empowerment. quickly pontificate parallel.
        </p>
        <div className="count">
          <Countdown
            value={deadline}
            onFinish={onFinish}
            style={{ color: "yellow" }}
          />
        </div>
        <button>
          <NavLink to={"/burgers"} className="countdown-navlink">
            Order Now
          </NavLink>
        </button>
      </div>
      <img src={offerProduct} alt="My Image" />
    </div>
  );
};

export default CountdownBanner;
