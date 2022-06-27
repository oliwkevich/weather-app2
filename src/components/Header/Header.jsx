import { current } from "@reduxjs/toolkit";
import React, { Component } from "react";
import Select from "react-select";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import { themeVar } from "../../context/ThemeContext";
import { useTheme } from "../../hooks/useTheme";
import s from "./Header.module.scss";

export const Header = () => {
  const theme = useTheme();
  const options = [
    { value: "budapest", label: "Будапешт" },
    { value: "krakow", label: "Краков" },
    { value: "kyiv", label: "Киев" },
  ];

  const colorStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor:
        theme.theme === themeVar.DARK ? "#4f4f4f" : "rgba(71, 147, 255, 0.2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
    }),
    singleValue: (styles) => ({
      ...styles,
      color: theme.theme === themeVar.DARK ? "#fff" : "#000",
    }),
  };

  const changeTheme = () => {
    theme.changeTheme(
      theme.theme === themeVar.LIGHT ? themeVar.DARK : themeVar.LIGHT
    );
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="headerLogo" />
        </div>
        <div className={s.title}>NEW REACT WEATHER</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.changeTheme} onClick={changeTheme}>
          <GlobalSvgSelector id="changeTheme" />
        </div>
        <Select
          defaultValue={options[0]}
          styles={colorStyles}
          options={options}
        />
      </div>
    </header>
  );
};
