import React from "react";

export const themeVar = {
  LIGHT: "light",
  DARK: "dark",
};

export const ThemeContext = React.createContext({
  theme: themeVar.LIGHT,
  changeTheme: () => {},
});
