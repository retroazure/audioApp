import React, { useContext } from "react";
import AppContext from "../context/appContext";
//Audio Player component
import ReactAudioPlayer from "react-audio-player";

export const AudioPlayer = () => {
  const { displayState, setDisplayState } = useContext(AppContext);
  console.log(displayState.path);
  return (
    <>
      <ReactAudioPlayer src={displayState.preview} autoPlay controls />
    </>
  );
};
