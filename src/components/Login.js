import React from "react";
import Icon from "@mdi/react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { mdiPlay } from "@mdi/js";

const Login = (props) => {
  const [setName] = useLocalStorage("name", "");
  return (
    <React.Fragment>
      <div className="w-1/2 mb-4">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Enter your name to start playing"
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex"
          type="button"
          onClick={(e) => {
            let nameInput = document.getElementById("name").value;
            if (nameInput !== "") {
              setName(nameInput);
              props.chageStep(2);
            }
          }}>
          Start <Icon path={mdiPlay} size={1} color="white" className="ms-2" />
        </button>
      </div>
    </React.Fragment>
  );
};

export default Login;
