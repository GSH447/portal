import React from "react";

const LoveSymbol = ({
  size = "love-md",
  position = "",
  className = "",
}) => {
  return (
    <div
      className={`love-symbol ${size} ${position} ${className}`}
    />
  );
};

export default LoveSymbol;


