import React from "react";
import "./Gallery.css";
import Gift from "../../img/img_gallery/gift.jpg";
import Inside from "../../img/img_gallery/inside.jpg";
import Inside2 from "../../img/img_gallery/inside_2.jpg";
import Mojito from "../../img/img_gallery/mojito.jpg";
import Steak from "../../img/img_gallery/steak.jpg";
import Wine from "../../img/img_gallery/wine.jpg";
import Card from "./Card";

const Gallery = () => {
  const images = [Gift, Inside, Inside2, Mojito, Steak, Wine];

  const arrangeImg = images.map((img) => {
    return <Card src={img} key={img}></Card>;
  });
  return <div className="image-list">{arrangeImg}</div>;
};

export default Gallery;
