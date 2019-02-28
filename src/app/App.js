import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Profile />
        <Dashboard />
        <Appointment />
        <NewsFeed />
        <Gallery />
      </div>
    );
  }
}

export default App;
