import React from "react";
const Theme = ({ theme, onThemeChange }) => {
  return (
    <div className={`${theme.className}`}>
      <h2>Theme</h2>
      <button onClick={onThemeChange}>Change Theme</button>
    </div>
  );
};

export default Theme;
