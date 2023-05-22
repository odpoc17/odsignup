import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <nav>
      <a href="#burger">
        <img src={`${process.env.PUBLIC_URL}/burger-icon.png`} alt="burger" />
      </a>
      <a href="#cloud">
        <img src={`${process.env.PUBLIC_URL}/cloud-icon.png`} alt="cloud" />
      </a>
      <a href="#settings">
        <img
          src={`${process.env.PUBLIC_URL}/settings-icon.png`}
          alt="settings"
        />
      </a>
      <a href="#chart">
        <img src={`${process.env.PUBLIC_URL}/chart-icon.png`} alt="chart" />
      </a>
    </nav>
  );
};

export default Sidebar;
