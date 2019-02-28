import React from "react";
import GalleryCard from "./ProfileAppointment";
import GalleryList from "./ProfileHairCard";
import Header from "./Header";

class Gallery extends React.Component {
  render() {
    return (
      <div>
        <h1>Gallery here</h1>
        <Header />
        <GalleryList />
        <GalleryCard />
      </div>
    );
  }
}

export default Gallery;
