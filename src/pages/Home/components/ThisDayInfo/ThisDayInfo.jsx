import s from "./ThisDayInfo.module.scss";
import { DayItem } from "./DayItem";

export const ThisDayInfo = ({ state }) => {
  const items = [
    {
      iconId: "temp",
      name: "Температура",
      value: `${state.main?.temp}° - ощущается как ${state.main?.feels_like}°`,
    },
    {
      iconId: "pressure",
      name: "Давление",
      value: `${state.main?.pressure} мм ртутного столба`,
    },
    {
      iconId: "temp2",
      name: "Макс./Мин. температура",
      value: `сегодня ${state.main?.temp_max}/${state.main?.temp_min}°`,
    },
    {
      iconId: "wind",
      name: "Ветер",
      value: `${state.wind?.speed} м/с`,
    },
  ];

  return (
    <div className={s.thisDayInfo}>
      <div className={s.thisDayInfoItems}>
        {items.map((item) => (
          <DayItem key={item.iconId} item={item} />
        ))}
      </div>
    </div>
  );
};
