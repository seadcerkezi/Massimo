import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.scss";
import { UserOutlined, ShopOutlined } from "@ant-design/icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <NavLink className="sidebar-links" to={"/"}>
          MASSIMO
        </NavLink>
      </div>
      <div className="sidebar-links">
        <NavLink className="sidebar-link" to={"/settings/users"}>
          <UserOutlined className="sidebar-icon" /> Users
        </NavLink>
        <NavLink className="sidebar-link" to={"/settings/products"}>
          <ShopOutlined className="sidebar-icon" /> Products
        </NavLink>
        <NavLink className="sidebar-link" to={"/settings/adminOrders"}>
          <ShopOutlined className="sidebar-icon" /> Orders
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
