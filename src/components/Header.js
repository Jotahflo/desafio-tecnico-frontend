import React from "react";
import Icon from "@mdi/react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { mdiCardsPlaying } from "@mdi/js";

const Header = () => {
  const [name] = useLocalStorage("name", "");
  const [totalSuccesses] = useLocalStorage("totalSuccesses", 0);
  const [totalErrors] = useLocalStorage("totalErrors", 0);
  return (
    <div className={"flex flex-col md:flex-row items-center px-2 mb-3 " + (name !== "" ? "justify-between" : "justify-center")}>
      {name !== "" && (
        <div className="flex order-2 md:order-1 animate__animated animate__fadeIn">
          <span className="me-2 font-bold">Username: </span>
          <span>{name}</span>
        </div>
      )}
      <div className="flex items-center justify-center order-1 md:order-2 animate__animated animate__fadeIn">
        <Icon path={mdiCardsPlaying} size={4} color="#003d80" />
        <span className="text-2xl font-bold">Memory</span>
      </div>
      {name !== "" && (
        <div className="order-3 animate__animated animate__fadeIn">
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
