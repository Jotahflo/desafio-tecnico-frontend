import React from "react";
import Icon from "@mdi/react";
import { mdiRepeat } from "@mdi/js";
import { useLocalStorage } from "@uidotdev/usehooks";

const CompleteMessage = ({ changeStep }) => {
  const [totalSuccesses, setTotalSuccesses] = useLocalStorage("totalSuccesses", 0);
  const [totalErrors, setTotalErrors] = useLocalStorage("totalErrors", 0);
  return (
    <div className="flex flex-col items-center animate__animated animate__zoomIn">
      <span className="text-2xl text-white">Congratulations you have finished the game!</span>
      <button
        className="bg-card hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex mt-3"
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
