import React from "react";

const PrimaryContainer = ({ children }) => {
  return (
    <div className="h-fit w-fit rounded p-4 shadow-customBoxShadow">
      {children}
    </div>
  );
};

export default PrimaryContainer;
