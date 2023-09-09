import React from "react";
import imagenQuestion from "../images/question-card.jpg";

const Card = (props) => {
  return (
    <div className="w-full h-full cursor-pointer border-2 border-red-500 rounded-xl">
      {props.active ? (
        <img src={props.urlImage} className="object-cover w-full h-full rounded-xl" alt="logo" />
      ) : (
        <img src={imagenQuestion} className="object-cover w-full h-full rounded-xl" alt="logo" />
      )}
    </div>
  );
};

export default Card;
