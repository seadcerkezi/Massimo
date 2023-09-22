import {
  PhoneOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [menuClicked, setMenuCliclked] = useState(false);
  const cartItems = useSelector((state) => state.card.cardItems);
  const menu = () => {
    setMenuCliclked(!menuClicked);
  };

  return (
    <nav className="nav">
      <div className="delivery">
        <p>Free delivery for all orders over $50. Order your food now!</p>
      </div>
      <div className="navbar">
        <div className="navbar-links">
          <NavLink className="nav-link" to={"/Massimo"}>
            HOMEPAGE
          </NavLink>
          <NavLink className="nav-link" to={"/menu"}>
            MENU
          </NavLink>
        </div>
        <h2>
          <NavLink
            style={{ textDecoration: "none", color: "#ef4444" }}
            to={"/Massimo"}
          >
            MASSIMO
          </NavLink>
        </h2>
        <div className="navbar-links">
          <p className="phone-icon">
            <a
              href="tel:+383123456"
              style={{ textDecoration: "none", color: "white" }}
            >
              <PhoneOutlined style={{ fontSize: "16px", color: "white" }} /> 123
              456
            </a>
          </p>
          <NavLink className="nav-link" to={"/order"}>
            ORDERS
          </NavLink>
          <NavLink className="nav-link" to={"/cart"}>
            <ShoppingCartOutlined /> <span>CART ({cartItems.length})</span>
          </NavLink>
          <NavLink className="nav-link" to={"/favs"}>
            <HeartOutlined /> <span>Favourties</span>
          </NavLink>
        </div>
        <MenuOutlined onClick={menu} className="hamburger-menu" />
      </div>
      {menuClicked === true ? (
        <div className="menu-links">
          <NavLink
            onClick={() => setMenuCliclked(false)}
            className="nav-link"
            to={"/Massimo"}
          >
            HOMEPAGE
          </NavLink>
          <NavLink
            onClick={() => setMenuCliclked(false)}
            className="nav-link"
            to={"/menu"}
          >
            MENU
          </NavLink>
          <p className="phone-icon">
            <a
              href="tel:+383123456"
              style={{ textDecoration: "none", color: "white" }}
            >
              <PhoneOutlined style={{ fontSize: "16px", color: "white" }} /> 123
              456
            </a>
          </p>
          <NavLink
            onClick={() => setMenuCliclked(false)}
            className="nav-link"
            to={"/order"}
          >
            ORDERS
          </NavLink>
          <NavLink
            onClick={() => setMenuCliclked(false)}
            className="nav-link"
            to={"/cart"}
          >
            <ShoppingCartOutlined /> <span>CART ({cartItems.length})</span>
          </NavLink>
          <NavLink
            onClick={() => setMenuCliclked(false)}
            className="nav-link"
            to={"/favs"}
          >
            <HeartOutlined /> <span>Favourties</span>
          </NavLink>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
};
export default Navbar;
