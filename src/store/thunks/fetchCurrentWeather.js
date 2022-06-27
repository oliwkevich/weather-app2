// https://api.openweathermap.org/data/2.5/weather?q={CITY}&units=metric&APPID={API_KEY}
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../axios";

export const fetchCurrentWeather = createAsyncThunk(
  "weather/fetchCurrent",
  async (cityName, { rejectWithValue }) => {
    try {
      const { data } = await api.get(
        `weather?q=${cityName}&lang=ru&units=metric`
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
