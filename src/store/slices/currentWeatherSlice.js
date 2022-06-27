import { createSlice } from "@reduxjs/toolkit";
import { fetchCurrentWeather } from "../thunks/fetchCurrentWeather";

const initialState = {
  weather: {},
  isLoading: false,
  response: {
    status: null,
    message: "",
  },
};

export const currentWeatherSlice = createSlice({
  name: "currentWeather",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCurrentWeather.pending]: (state) => {
      state.isLoading = true;
      state.response.status = "loading";
      state.response.message = "Weather is LOADING...";
      state.weather = {};
    },
    [fetchCurrentWeather.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.response.status = "completed";
      state.response.message = "Weather LOADED";
      state.weather = action.payload;
    },
    [fetchCurrentWeather.rejected]: (state, action) => {
      state.response.status = "error";
      state.response.message = action.payload;
      state.weather = {};
      state.isLoading = false;
    },
  },
});

// export const {} = currentWeatherSlice.actions;

export default currentWeatherSlice.reducer;
