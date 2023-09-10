import React, { useState } from "react";
import Icon from "@mdi/react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { mdiPlay, mdiAlert } from "@mdi/js";

const Login = ({ changeStep }) => {
  const [name, setName] = useLocalStorage("name", "");
  const [nameNotValid, setNameNotValid] = useState(false);
  return (
    <React.Fragment>
      <div className="w-full md:w-1/2 mb-4 animate__animated animate__bounceIn">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
          Name
        </label>
        <input
          className={
            "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" +
            (nameNotValid ? "border-red-700" : "")
          }
          id="name"
          type="text"
          placeholder="Enter your name to start playing"
          autoComplete="off"
        />
        {nameNotValid && (
          <span class="flex font-medium text-red-800 mt-2 animate__animated animate__fadeIn">
            <Icon path={mdiAlert} size={1} className="me-1" /> Invalid name! You must enter a name.
          </span>
        )}
      </div>
      <div className="flex items-center justify-center animate__animated animate__headShake animate__delay-1s animate__repeat-3">
        <button
          className="bg-card hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex"
          type="button"
          onClick={(e) => {
            let nameInput = document.getElementById("name").value;
            if (nameInput !== "") {
              setName(nameInput);
              setNameNotValid(false);
              changeStep(2);
            } else {
              setNameNotValid(true);
            }
          }}>
          Start <Icon path={mdiPlay} size={1} color="white" className="ms-2" />
        </button>
      </div>
    </React.Fragment>
  );
};

export default Login;
