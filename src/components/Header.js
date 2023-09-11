import React from "react";
import Icon from "@mdi/react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { mdiCardsPlaying } from "@mdi/js";
import "../styles/header.css";

const Header = () => {
  const [username] = useLocalStorage("username", "");
  const [totalSuccesses] = useLocalStorage("totalSuccesses", 0);
  const [totalErrors] = useLocalStorage("totalErrors", 0);
  return (
    <div className={"header " + (username !== "" ? "header--justify-between" : "header--justify-center")}>
      {username !== "" && (
        <div className="header__title-user header__title-user--order animate__animated animate__fadeIn">
          <span className="header__text-user">Username: </span>
          <span>{username}</span>
        </div>
      )}
      <div className="logo logo--order animate__animated animate__fadeIn">
        <Icon path={mdiCardsPlaying} size={4} color="#003d80" />
        <span className="logo__text">Memory</span>
      </div>
      {username !== "" && (
        <div className="header__statistics-user--order animate__animated animate__fadeIn">
          <table className="table-statistics">
            <tbody>
              <tr>
                <td className="table-statistics__cell-title">Total successes</td>
                <td>{totalSuccesses}</td>
              </tr>
              <tr>
                <td className="table-statistics__cell-title">Total errors</td>
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
