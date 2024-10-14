import React from "react";
import AppBar from "../../components/dashboard-appbar/Appbar";
import BoardContent from "../../components/board-content/BoardContent";

const Dashboard = () => {
  return (
    <AppBar>
      <BoardContent />
    </AppBar>
  );
};

export default Dashboard;
