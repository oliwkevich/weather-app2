import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import { DayItem } from "../../pages/Home/components/ThisDayInfo/DayItem";
import s from "./Popup.module.scss";

export const Popup = () => {
  const items = [
    {
      iconId: "temp",
      name: "Температура",
      value: "20° - ощущается как 17°",
    },
    {
      iconId: "pressure",
      name: "Давление",
      value: "765мм ртутного столба - нормальное",
    },
    {
      iconId: "precipitation",
      name: "Осадки",
      value: "Без осадков",
    },
    {
      iconId: "wind",
      name: "Ветер",
      value: "3 м/с юго-запад - легкий ветер",
    },
  ];

  return (
    <>
      <div className={s.blur}></div>
      <div className={s.popup}>
      <div className={s.day}>
        <div className={s.dayTemp}>12°</div>
        <div className={s.dayName}>Среда</div>
        <div className={s.img}>
          <GlobalSvgSelector id='sun' />
        </div>
        <div className={s.time}>12:23</div>
        <div className={s.city}>Будапешт</div>
      </div>
        <div className={s.thisDayInfoItems}>
          {items.map((item) => (
            <DayItem key={item.iconId} item={item} />
          ))}
        </div>
        <div className={s.close}>
          <GlobalSvgSelector id='close' />
        </div>
      </div>
    </>
  );
};
