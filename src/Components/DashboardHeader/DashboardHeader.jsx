import React from "react";
import "./dashboardHeader.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogoutOutlined, HomeOutlined } from "@ant-design/icons";
import { message } from "antd";
import { logOut } from "../../redux/user/userActions";

const DashboardHeader = () => {
  const logedUserId = useSelector((state) => state.user.logedUserId);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="dashboard-header">
      <h4 onClick={() => navigate("/settings")}>{logedUserId.name}</h4>
      <span className="header-span" onClick={() => navigate("/")}>
        <HomeOutlined className="header-antd" />
      </span>
      <span
        className="header-span"
        style={{ cursor: "pointer" }}
        onClick={() => {
          dispatch(logOut());
          navigate("/Massimo");
          message.error("Loged Out");
        }}
      >
        <LogoutOutlined className="header-antd" />
      </span>
    </div>
  );
};

export default DashboardHeader;
