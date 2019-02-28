import React from "react";
import DashRevenue from "./DashRevenue";
import DashUser from "./DashUser";
import DashboardAppointment from "./DashAppointment";
import Header from "./Header";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>Dashboard here</h1>
        <Header />
        <DashUser />
        <DashboardAppointment />
        <DashRevenue />
      </div>
    );
  }
}

export default Dashboard;
