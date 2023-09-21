import React from "react";
import { burgers, pastas, pizzas } from "../../data";
import "./horizontalScroll.scss";
import { NavLink } from "react-router-dom";

const HorizontalScroll = () => {
  const displayedProducts = [pizzas[0], pastas[0], burgers[0]];

  return (
    <div className="horizontal-scroll">
      {displayedProducts.map((item) => (
        <div className="scroll-items">
          <img src={item.img} alt="Item Image" />
          <div className="scroll-text">
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
            <h6>${item.price}</h6>
            <NavLink to={`/${item.category}/${item.id}`}>
              <button>Add to Cart</button>
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalScroll;
