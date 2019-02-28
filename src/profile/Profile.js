import React from "react";
import ProfileAppointment from "./ProfileAppointment";
import ProfileHairCard from "./ProfileHairCard";
import Header from "./header";

class Profile extends React.Component {
  render() {
    return (
      <div>
        <h1>Profile here</h1>
        <ProfileAppointment />
        <ProfileHairCard />
        <Header />
      </div>
    );
  }
}

export default Profile;
