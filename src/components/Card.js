import React, { useState, useEffect } from "react";

const Card = ({
  uuid,
  urlImageBackCard,
  urlImageFrontcard,
  uuidCard1Pressed,
  uuidCard2Pressed,
  setUuidCard1Pressed,
  setUuidCard2Pressed,
  totalSuccesses,
  setTotalSuccesses,
  totalErrors,
  setTotalErrors,
}) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (
      uuidCard1Pressed !== "" &&
      uuidCard2Pressed !== "" &&
      uuidCard1Pressed !== uuidCard2Pressed &&
      (uuid === uuidCard1Pressed || uuid === uuidCard2Pressed)
    ) {
      setTimeout(() => {
        setUuidCard1Pressed("");
        setUuidCard2Pressed("");
        setTotalErrors(totalErrors + 1);
        setIsActive(false);
      }, 1000);
    } else if (
      uuidCard1Pressed !== "" &&
      uuidCard2Pressed !== "" &&
      uuidCard1Pressed === uuidCard2Pressed &&
      (uuid === uuidCard1Pressed || uuid === uuidCard2Pressed)
    ) {
      setUuidCard1Pressed("");
      setUuidCard2Pressed("");
      setTotalSuccesses(totalSuccesses + 1);
    }
  }, [uuidCard1Pressed, uuidCard2Pressed]);

  return (
    <div
      className="w-full h-full cursor-pointer border-2 border-red-500 rounded-xl drop-shadow-md animate-bounce"
      onClick={(e) => {
        if (uuidCard1Pressed === "") {
          setUuidCard1Pressed(uuid);
          setIsActive(true);
        } else if (uuidCard1Pressed !== "" && uuidCard2Pressed === "") {
          setUuidCard2Pressed(uuid);
          setIsActive(true);
        }
      }}>
      {isActive ? (
        <img src={urlImageFrontcard} className="object-cover w-full h-full rounded-xl" alt="logo" />
      ) : (
        <img src={urlImageBackCard} className="object-cover w-full h-full rounded-xl" alt="logo" />
      )}
    </div>
  );
};

export default Card;
