import React from "react";
const Child = ({ theme, onThemeChange }) => {
  return (
    <div className={`${theme.className}`}>
      <h2>Child</h2>
      <button onClick={onThemeChange}>Change Theme</button>
    </div>
  );
};

export default Child;
