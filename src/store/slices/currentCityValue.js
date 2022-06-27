import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: {
    name: "Будапешт",
    value: "budapest",
  },
};

export const currentCityValue = createSlice({
  name: "currentWeather",
  initialState,
  reducers: {
    setCity(state, action) {
      state.name = action.payload;
      state.value = action.payload;
    },
  },
});

export const { setCity } = currentCityValue.actions;

export default currentCityValue.reducer;
