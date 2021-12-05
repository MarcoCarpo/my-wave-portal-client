import React, { useEffect, useState } from "react";
import "./App.css";
import { ethers } from "ethers";

function App() {
  const wave = () => {};

  return (
    <div className="container__outer">
      <div className="container__background">
        <div className="container__inner">
          <div className="header">Hello!</div>
          <div className="separator" style={{ fontSize: 24 }}>
            🍣🤟🏼✨🎅🏽👀
          </div>

          <div className="bio">
            My name is{" "}
            <strong>
              <a href="https://marcocarpona.com">Marco Carpona</a>
            </strong>
            , I am a Junior Web Frontend Developer, and recently I've been
            getting into the blockchain app development.
          </div>

          <div className="info">
            <a
              href="https://app.buildspace.so/projects/CO02cf0f1c-f996-4f50-9669-cf945ca3fb0b/lessons/LEd98170b1-09f3-4a89-af5f-f54c9788c955"
              target="_blank"
              rel="noreferrer"
            >
              Waveportal
            </a>{" "}
            is the project course followed to get this app.
          </div>

          <button className="waveButton" onClick={wave}>
            Wave
          </button>
        </div>
      </div>
      <div className="monster">
        <div className="eye eye-left" style={{}}></div>
        <div className="eye eye-right"></div>
      </div>
    </div>
  );
}

export default App;
