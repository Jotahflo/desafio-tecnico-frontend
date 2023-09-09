import React from "react";
import Icon from "@mdi/react";
import { mdiCardsPlaying } from "@mdi/js";

const Header = () => {
  return (
    <div className="flex items-center justify-center">
      <Icon path={mdiCardsPlaying} size={4} color="#8b5cf6" />
      <span className="text-2xl font-bold">Memory</span>
    </div>
  );
};

export default Header;
