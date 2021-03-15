import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

//Drag and Drop component

export const DragnDrop = () => {
  const onDrop = useCallback((acceptedFiles) => {}, []);

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
