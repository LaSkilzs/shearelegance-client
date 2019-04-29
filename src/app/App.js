import React, { Component } from "react";
import Navbar from "./Navbar"
import Profile from "../profile/Profile"
import Dashboard from "../dashboard/Dashboard"
import Appointment from "../appointment/Appointment"
import Newsfeed from "../newsfeed/Newsfeed"
import Gallery from "../gallery/Gallery"
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Profile />
        <Dashboard />
        <Appointment />
        <Gallery />
        <Newsfeed />
      </div>
    );
  }
}

export default App;
