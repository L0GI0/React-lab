import React, { useContext } from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";

export default function FunctionContextComponent() {
  //   const { darkTheme, toggleTheme } = useContext(ThemeContext);
  const darkTheme = useTheme();
  const updateTheme = useThemeUpdate();
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return (
    <>
      <button onClick={updateTheme}>Toggle Theme</button>
      <div style={themeStyles}>Function Theme</div>
    </>
  );
}
