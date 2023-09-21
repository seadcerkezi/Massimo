import { Carousel } from "antd";
import React from "react";
import "./mainBanner.scss";
import { NavLink } from "react-router-dom";

const MainBanner = () => {
  const contentStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center", // Center items vertically
    justifyContent: "center", // Center items horizontally
    height: "550px", // Set the height as needed
    background: "#fef2f2", // Set background color
    color: "#fff", // Set text color
  };
  return (
    <Carousel autoplay className="main-banner">
      <div>
        <div className="contentStyle">
          <div className="div-text" style={{ width: "50%" }}>
            <h2>WE DELIVER YOUR</h2>
            <h2>ORDER WHEREVER YOU</h2>
            <h2>ARE IN</h2>
            <button>
              <NavLink className="navlink" to={"/menu"}>
                ORDER NOW
              </NavLink>
            </button>
          </div>
          <img
            src="https://www.eatingwell.com/thmb/PhRj8Sp6g5m-Cn9AJL2zeLi1LM4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/easy-vegan-pizza-1x1-002-a224f13696b3483d8099b7ae5b494250.jpg"
            alt="Image 1"
            style={{ width: "50%", marginRight: "10px" }}
          />
        </div>
      </div>
      <div>
        <div className="contentStyle">
          <div className="div-text" style={{ width: "50%" }}>
            <h2>THE BEST PIZZA TO</h2>
            <h2>SHARE WITH YOUR</h2>
            <h2>FAMILY</h2>
            <button>
              <NavLink className="navlink" to={"/menu"}>
                ORDER NOW
              </NavLink>
            </button>
          </div>
          <img
            src="https://www.marionskitchen.com/wp-content/uploads/2023/02/Spicy-Salami-and-3-Cheese-Pizza-01.jpg"
            alt="Image 2"
            style={{ width: "50%", marginRight: "10px" }}
          />
        </div>
      </div>
      <div>
        <div className="contentStyle">
          <div className="div-text" style={{ width: "50%" }}>
            <h2>ALWAYS FRESH &</h2>
            <h2>ALWAYS CRISPY &</h2>
            <h2>ALWAYS HOT</h2>
            <button>
              <NavLink className="navlink" to={"/menu"}>
                ORDER NOW
              </NavLink>
            </button>
          </div>
          <img
            src="https://www.seriouseats.com/thmb/-_mziT2tl0F63I4kfji4S6bE-cA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__10__20181015-state-of-slice-delmar-clay-williams-2de043fa5a0d4475b6c567e4a974b13b.jpg"
            alt="Image 3"
            style={{ width: "50%", marginRight: "10px" }}
          />
        </div>
      </div>
    </Carousel>
  );
};

export default MainBanner;
