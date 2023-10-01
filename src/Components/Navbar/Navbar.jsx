import {
  PhoneOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
  HeartOutlined,
  LogoutOutlined,
  SettingOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import "./navbar.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/user/userActions";
import { message } from "antd";

const Navbar = () => {
  const [menuClicked, setMenuCliclked] = useState(false);
  const allUsers = useSelector((state) => state.user.allUsers);
  const logedUserId = useSelector((state) => state.user.logedUserId);
  const logedUser = allUsers.find((user) => user.id === logedUserId);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
          {logedUser && (
            <NavLink className="nav-link" to={"/order"}>
              ORDERS
            </NavLink>
          )}
          <NavLink className="nav-link" to={"/cart"}>
            <ShoppingCartOutlined />{" "}
            <span>CART ({logedUser?.card?.length || 0})</span>
          </NavLink>
          <NavLink className="nav-link" to={"/favs"}>
            <HeartOutlined /> <span>Favourties</span>
          </NavLink>

          {logedUser?.role === "admin" || logedUser?.role === "user" ? (
            <div style={{ display: "flex", gap: "10px" }}>
              <div style={{ cursor: "pointer" }} className="nav-link">
                {logedUser.name}
              </div>
              {logedUser.role === "admin" ? (
                <NavLink to={"/settings"} className="nav-link">
                  <SettingOutlined />
                </NavLink>
              ) : null}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  dispatch(logOut());
                  navigate("/Massimo");
                  message.error("Loged Out");
                }}
              >
                <LogoutOutlined />
              </span>
            </div>
          ) : (
            <NavLink className="nav-link" to={"/login"}>
              <span>Log In</span>
            </NavLink>
          )}
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
            <ShoppingCartOutlined />{" "}
            <span>CART ({logedUser?.card?.length || 0})</span>
          </NavLink>
          <NavLink
            onClick={() => setMenuCliclked(false)}
            className="nav-link"
            to={"/favs"}
          >
            <HeartOutlined /> <span>Favourties</span>
          </NavLink>
          {logedUser?.role === "admin" || logedUser?.role === "user" ? (
            <div style={{ display: "flex", gap: "10px" }}>
              <div className="nav-link">{logedUser.name}</div>
              {logedUser.role === "admin" ? (
                <NavLink to="/settings" className="nav-link">
                  <SettingOutlined />
                </NavLink>
              ) : null}
              <span
                onClick={() => {
                  dispatch(logOut());
                  navigate("/Massimo");
                }}
              >
                <LogoutOutlined />
              </span>
            </div>
          ) : (
            <NavLink className="nav-link" to={"/login"}>
              <span>Log In</span>
            </NavLink>
          )}
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
};
export default Navbar;
