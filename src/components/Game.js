import React, { useState, useEffect } from "react";
import Icon from "@mdi/react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { mdiArrowRightThick } from "@mdi/js";
import Card from "../components/Card";
import getDataImagesCards from "../data/dataImagesCards";

const Game = (props) => {
  const [imagesCards, setImagesCards] = useState([]);

  useEffect(() => {
    new Promise((resolve) => {
      resolve(getDataImagesCards());
    }).then((value) => {
      if (value !== null) {
        setImagesCards(value);
      }
    });
  }, []);

  if (imagesCards.length > 0) {
    return (
      <div className="w-full h-full grid grid-cols-8 grid-rows-3 gap-4">
        {imagesCards.map((images, index) => {
          return <Card key={"card" + (index + 1)} urlImage={images.url} />;
        })}
      </div>
    );
  } else {
    return <span className="text-white text-xl">Loading information...</span>;
  }
};

export default Game;
