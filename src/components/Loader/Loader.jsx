
import React from 'react';
import { ScaleLoader } from 'react-spinners'; // Import ScaleLoader from react-spinners

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <ScaleLoader color="#36d7b7" /> {/* Render ScaleLoader component */}
    </div>
  );
}

export default Loader;
