import React, { useState, useCallback, useContext } from "react";
import { useDropzone } from "react-dropzone";
import AppContext from "../context/appContext";

//Drag and Drop component

export const DragnDrop = () => {
  const { displayState, setDisplayState } = useContext(AppContext);

  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();

        reader.onabort = () => console.log("file reading was aborted");
        reader.onerror = () => console.log("file reading has failed");
        reader.onload = () => {
          console.log(file.name);
          setDisplayState(
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          );

          // Do whatever you want with the file contents
          const binaryStr = reader.result;
          console.log(binaryStr);
        };
        reader.readAsArrayBuffer(file);
        //reader.readAsDataURL(file);
        //reader.readAsBinaryString(file);
        //reader.readAsText(file);
      });
    },
    [setDisplayState]
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
