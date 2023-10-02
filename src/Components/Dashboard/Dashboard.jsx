import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-sidebar">
        <Sidebar />
      </div>
      <div className="dashboard-head">
        <DashboardHeader />
        <div className="dashboard-outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
