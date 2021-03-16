import React, { useState, useCallback, useContext } from "react";
import { useDropzone } from "react-dropzone";
import AppContext from "../context/appContext";

//Drag and Drop component

export const DragnDrop = () => {
  const { displayState, setDisplayState } = useContext(AppContext);

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles) {
        setDisplayState({
          acceptedFiles,
        });
        console.log(acceptedFiles);
      } else {
        return displayState;
      }
    },
    [setDisplayState, displayState]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="dragndrop" {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here...</p>
      ) : (
        <p>Drag and drop some files here, or click to select files</p>
      )}
    </div>
  );
};
