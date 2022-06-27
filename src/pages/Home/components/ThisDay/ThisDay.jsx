import s from "./ThisDay.module.scss";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";

export const ThisDay = ({ state }) => {
  const date = new Date();
  const time = `${date.getHours()}:${date.getMinutes()}`
  return (
    <div className={s.thisDay}>
      <div className={s.topBlock}>
        <div className={s.topWrapper}>
          <div className={s.thisTemp}>{state.main?.temp}°</div>
          <div className={s.thisDayName}>Сейчас</div>
        </div>
        <GlobalSvgSelector id="sun" />
      </div>
      <div className={s.bottomBlock}>
        <div className={s.thisTime}>
          Время: <span>{time}</span>
        </div>
        <div className={s.thisCity}>{state.name}</div>
      </div>
    </div>
  );
};
