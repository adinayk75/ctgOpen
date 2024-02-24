import React from "react";
import Content from "../components/Content";
import Gallery from "../components/Gallery";
import JsonData from "../data/data.json";

const PhotoGallery = () => {
  return (
    <>
      <Gallery data={JsonData.Gallery} />
    </>
  );
};

export default PhotoGallery;
