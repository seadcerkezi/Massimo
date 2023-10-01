import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import DashboardHeader from "../DashboardHeader/DashboardHeader";

const Dashboard = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <div style={{ display: "flex", width: "20%" }}>
        <Sidebar />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: "1",
          minHeight: "100vh",
        }}
      >
        <DashboardHeader />
        <div
          style={{
            backgroundColor: "#f9fafb",
            padding: "40px 48px",
            flexGrow: "1",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
