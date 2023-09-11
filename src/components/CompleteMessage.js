import React from "react";
import Icon from "@mdi/react";
import { mdiRepeat } from "@mdi/js";
import { useLocalStorage } from "@uidotdev/usehooks";
import "../styles/completeMessage.css";

const CompleteMessage = ({ changeStep }) => {
  const [totalSuccesses, setTotalSuccesses] = useLocalStorage("totalSuccesses", 0);
  const [totalErrors, setTotalErrors] = useLocalStorage("totalErrors", 0);
  return (
    <div className="complete-message animate__animated animate__zoomIn">
      <span className="complete-message__text">Congratulations you have finished the game!</span>
      <button
        className="complete-message__button complete-message__button--primary"
        type="button"
        onClick={(e) => {
          setTotalSuccesses(0);
          setTotalErrors(0);
          changeStep(2);
        }}>
        Test again <Icon path={mdiRepeat} size={1} color="white" className="ms-2" />
      </button>
    </div>
  );
};

export default CompleteMessage;
