import React, { FC } from "react";
import "./Dashboard.scss";

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => (
  <div className="Dashboard">
    <div className="main-content">
      <div className="bg-gray">
        <div className="container-fluid ctm-container">Top Content Here</div>
      </div>
      <div className="container-fluid ctm-container bottom_bx">
        <div className="row">Bottom content here</div>
      </div>
    </div>
  </div>
);

export default Dashboard;
