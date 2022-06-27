import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import s from "./Days.module.scss";

export const Card = ({ obj }) => {
  return <div className={s.card}>
    <div className={s.day}>{obj.day}</div>
    <div className={s.dayInfo}>{obj.day_info}</div>
    <div className={s.img}>
        <GlobalSvgSelector id={obj.icon_id}/>
    </div>
    <div className={s.tempDay}>{obj.temp_day}</div>
    <div className={s.tempNight}>{obj.temp_night}</div>
    <div className={s.info}>{obj.info}</div>
  </div>;
};
