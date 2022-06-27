import s from "./Days.module.scss";

export const Tabs = () => {
  const tabs = [
    {
      value: "На неделю",
    },
    {
      value: "На 10 дней",
    },
    {
      value: "На месяц",
    },
  ];

  return (
    <div className={s.tabs}>
      <div className={s.tabsWrapper}>
        {tabs.map((tab, index) => (
          <div className={s.tab} key={index}>
            {tab.value}
          </div>
        ))}
      </div>
      <div className={s.cancel}>Отменить</div>
    </div>
  );
};
