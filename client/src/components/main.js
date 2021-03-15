import React, { useContext } from "react";
import "../styles/main.css";
import { AudioPlayer } from "./audioPlayer";
import AppContext from "../context/appContext";
import { DragnDrop } from "./dragndrop";

//Parent component for drag and drop and Audio Player components

const Main = ({ text }) => {
  const { displayState, setDisplayState } = useContext(AppContext);

  const toggle = () => {
    setDisplayState({
      display: displayState ? false : true,
    });
  };

  return (
    <div className="container">
      <h1>AudioApp</h1>
      <p>{text}</p>

      <button onClick={toggle}>Press Here</button>
      <DragnDrop />
    </div>
  );
};

export default Main;
