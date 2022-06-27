import React from "react";
import s from "./ThisDayInfo.module.scss";
import { IndicatorSvgSelector } from "../../../../assets/icons/indicator/IndicatorSvgSelector";

export const DayItem = ({ item }) => {
  const { iconId, name, value } = item;
  return (
    <div className={s.item}>
      <div className={s.indicator}>
        <IndicatorSvgSelector id={iconId} />
      </div>
      <div className={s.indicatorName}>{name}</div>
      <div className={s.indicatorValue}>{value}</div>
    </div>
  );
};
