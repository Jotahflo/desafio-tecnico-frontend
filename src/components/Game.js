import React, { useState, useEffect } from "react";
import Icon from "@mdi/react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { mdiArrowRightThick } from "@mdi/js";

const Game = (props) => {
  const [imagesCards, setImagesCards] = useState([]);

  useEffect(() => {
    fetch("https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="mb-4"></div>
    </React.Fragment>
  );
};

export default Game;
