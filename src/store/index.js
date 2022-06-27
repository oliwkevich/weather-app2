import { configureStore, combineReducers } from "@reduxjs/toolkit";
import currentCityValue from "./slices/currentCityValue";
import currentWeatherSlice from "./slices/currentWeatherSlice";

const rootReducer = combineReducers({
  currentWeather: currentWeatherSlice,
  currentCity: currentCityValue,
});

export const store = configureStore({
  reducer: rootReducer,
});
