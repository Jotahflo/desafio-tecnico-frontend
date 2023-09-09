import React from "react";
import Icon from "@mdi/react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { mdiCardsPlaying } from "@mdi/js";

const Header = () => {
  const [name] = useLocalStorage("name", "");
  const [totalSuccesses] = useLocalStorage("totalSuccesses", 0);
  const [totalErrors] = useLocalStorage("totalErrors", 0);
  return (
    <div className={name !== "" ? "flex flex-col md:flex-row items-center px-2 justify-between" : "flex items-center px-2 justify-center"}>
      {name !== "" && (
        <div className="flex order-3 md:order-1">
          <span className="me-2 font-bold">Username: </span>
          <span>{name}</span>
        </div>
      )}
      <div className="flex items-center justify-center order-1 md:order-2">
        <Icon path={mdiCardsPlaying} size={4} color="#003d80" />
        <span className="text-2xl font-bold">Memory</span>
      </div>
      {name !== "" && (
        <div className="order-2 md:order-3">
          <table className="table-fixed">
            <tbody>
              <tr>
                <td className="pe-2 font-bold text-end">Total successes</td>
                <td>{totalSuccesses}</td>
              </tr>
              <tr>
                <td className="pe-2 font-bold text-end">Total errors</td>
                <td>{totalErrors}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Header;
