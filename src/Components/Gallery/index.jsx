import React from "react";
import { getData } from "./../../Utils/get";
import Card from "./../Card";

const housing = await getData("/logements.json");

const Gallery = ({ page }) => {
  return (
    <ul className={`gallery ${page}__gallery`}>
      {housing.map((item, index) => {
        return <Card key={item.id} housing={item} page={page} />;
      })}
    </ul>
  );
};

export default Gallery;
