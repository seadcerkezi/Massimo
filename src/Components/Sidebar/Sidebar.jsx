import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.scss";
import { UserOutlined, ShopOutlined, SendOutlined } from "@ant-design/icons";

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
          <UserOutlined className="sidebar-icon" />
          <span className="span">Users</span>
        </NavLink>

        <NavLink className="sidebar-link" to={"/settings/products"}>
          <ShopOutlined className="sidebar-icon" />
          <span className="span">Products</span>
        </NavLink>

        <NavLink className="sidebar-link" to={"/settings/adminOrders"}>
          <SendOutlined className="sidebar-icon" />
          <span className="span">Orders</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
