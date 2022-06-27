import React from "react";
import { ThemeContext, themeVar } from "../context/ThemeContext";
import { ChangeCssRootVariables } from "../model/ChangeCssRootVariables";
import { Storage } from "../model/Storage";

export const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = React.useState(Storage.getItem('theme') || themeVar.LIGHT);

  
  function changeTheme(theme) {
    Storage.setItem('theme', theme)
    setTheme(theme);
    ChangeCssRootVariables(theme);
  }
  ChangeCssRootVariables(theme);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }} {...props}>
      {children}
    </ThemeContext.Provider>
  );
};
