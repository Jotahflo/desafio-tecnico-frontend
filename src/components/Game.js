import React, { useState, useEffect } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import Card from "../components/Card";
import getDataImagesCards from "../data/dataImagesCards";
import imagenQuestion from "../images/question-card.jpg";

const Game = ({ changeStep }) => {
  const [imagesCards, setImagesCards] = useState([]);
  const [totalSuccesses, setTotalSuccesses] = useLocalStorage("totalSuccesses", 0);
  const [totalErrors, setTotalErrors] = useLocalStorage("totalErrors", 0);
  const [uuidCard1Pressed, setUuidCard1Pressed] = useState("");
  const [uuidCard2Pressed, setUuidCard2Pressed] = useState("");

  useEffect(() => {
    new Promise((resolve) => {
      resolve(getDataImagesCards());
    }).then((value) => {
      if (value !== null) {
        setImagesCards(value);
      }
    });
    setTotalSuccesses(0);
    setTotalErrors(0);
    setUuidCard1Pressed("");
    setUuidCard2Pressed("");
  }, []);

  useEffect(() => {
    if (totalSuccesses === 12) {
      changeStep(3);
    }
  }, [totalSuccesses]);

  if (imagesCards.length > 0) {
    return (
      <div className="w-full h-full grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8 grid-rows-12 md:grid-rows-4 lg:grid-rows-3 gap-4">
        {imagesCards.map((images, index) => {
          return (
            <Card
              key={"card" + (index + 1)}
              uuid={images.uuid}
              urlImageBackCard={imagenQuestion}
              urlImageFrontcard={images.url}
              uuidCard1Pressed={uuidCard1Pressed}
              setUuidCard1Pressed={setUuidCard1Pressed}
              uuidCard2Pressed={uuidCard2Pressed}
              setUuidCard2Pressed={setUuidCard2Pressed}
              totalSuccesses={totalSuccesses}
              setTotalSuccesses={setTotalSuccesses}
              totalErrors={totalErrors}
              setTotalErrors={setTotalErrors}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="flex items-center">
        <svg className="animate-spin -ml-1 mr-3 h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span className="text-white text-xl">Loading game...</span>
      </div>
    );
  }
};

export default Game;
