import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentWeather } from "../../store/thunks/fetchCurrentWeather";
import { Days } from "./components/Days/Days";
import { ThisDay } from "./components/ThisDay/ThisDay";
import { ThisDayInfo } from "./components/ThisDayInfo/ThisDayInfo";
import s from "./Home.module.scss";

export const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.currentWeather.weather);

  console.log(state);

  React.useEffect(() => {
    dispatch(fetchCurrentWeather("budapest"));
  }, [dispatch]);

  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay state={state} />
        <ThisDayInfo state={state}/>
      </div>
      <Days />
    </div>
  );
};
