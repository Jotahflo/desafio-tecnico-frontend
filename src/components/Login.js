import React, { useState } from "react";
import Icon from "@mdi/react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { mdiPlay, mdiAlert } from "@mdi/js";
import "../styles/login.css";

const Login = ({ changeStep }) => {
  const [username, setUsername] = useLocalStorage("username", "");
  const [nameNotValid, setNameNotValid] = useState(false);
  return (
    <React.Fragment>
      <div className="form-username animate__animated animate__bounceIn">
        <label className="form-username__label" htmlFor="username">
          Username
        </label>
        <input className="form-username__input" id="username" type="text" placeholder="Enter your username to start playing" autoComplete="off" />
        {nameNotValid && (
          <span class="form-username__span form-username__span--error animate__animated animate__fadeIn">
            <Icon path={mdiAlert} size={1} className="me-1" /> Invalid username! You must enter a username.
          </span>
        )}
      </div>
      <div className="form-button animate__animated animate__headShake animate__delay-1s animate__repeat-3">
        <button
          className="form-button__button form-button__button--primary"
          type="button"
          onClick={(e) => {
            let usernameInput = document.getElementById("username").value;
            if (usernameInput !== "") {
              setUsername(usernameInput);
              setNameNotValid(false);
              changeStep(2);
            } else {
              setNameNotValid(true);
            }
          }}>
          Start <Icon path={mdiPlay} size={1} color="white" className="form-button__icon" />
        </button>
      </div>
    </React.Fragment>
  );
};

export default Login;
