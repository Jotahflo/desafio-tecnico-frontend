import React, { useState, useEffect } from "react";

const Card = (props) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (
      props.uuidCard1Pressed !== "" &&
      props.uuidCard2Pressed !== "" &&
      props.uuidCard1Pressed !== props.uuidCard2Pressed &&
      (props.uuid === props.uuidCard1Pressed || props.uuid === props.uuidCard2Pressed)
    ) {
      setTimeout(() => {
        props.setUuidCard1Pressed("");
        props.setUuidCard2Pressed("");
        props.setTotalErrors(props.totalErrors + 1);
        setIsActive(false);
      }, 1000);
    } else if (
      props.uuidCard1Pressed !== "" &&
      props.uuidCard2Pressed !== "" &&
      props.uuidCard1Pressed === props.uuidCard2Pressed &&
      (props.uuid === props.uuidCard1Pressed || props.uuid === props.uuidCard2Pressed)
    ) {
      props.setUuidCard1Pressed("");
      props.setUuidCard2Pressed("");
      props.setTotalSuccesses(props.totalSuccesses + 1);
    }
  }, [props.uuidCard1Pressed, props.uuidCard2Pressed]);

  return (
    <div
      className="w-full h-full cursor-pointer border-2 border-red-500 rounded-xl drop-shadow-md"
      onClick={(e) => {
        if (props.uuidCard1Pressed === "") {
          props.setUuidCard1Pressed(props.uuid);
          setIsActive(true);
        } else if (props.uuidCard1Pressed !== "" && props.uuidCard2Pressed === "") {
          props.setUuidCard2Pressed(props.uuid);
          setIsActive(true);
        }
      }}>
      {isActive ? (
        <img src={props.urlImageFrontcard} className="object-cover w-full h-full rounded-xl" alt="logo" />
      ) : (
        <img src={props.urlImageBackCard} className="object-cover w-full h-full rounded-xl" alt="logo" />
      )}
    </div>
  );
};

export default Card;
