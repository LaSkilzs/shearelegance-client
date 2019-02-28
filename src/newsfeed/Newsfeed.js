import React from "react";
import Comment from "./Comment";
import Recent from "./Recent";
import Header from "./Header";

class NewsFeed extends React.Component {
  render() {
    return (
      <div>
        <h1>NewsFeed here</h1>
        <Recent />
        <Comment />
        <Header />
      </div>
    );
  }
}

export default NewsFeed;
