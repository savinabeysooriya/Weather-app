import axios from "axios";

const apiToken = process.env.REACT_APP_OPEN_WEATHER_TOKEN;

export function getWeather(cityName: string) {
  return axios.get(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=" +
    apiToken +
    "&units=metric"
  );
}

export function getForecast(lat: number, lon: number) {
  return axios.get(
    "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=current,minutely,hourly,alerts" +
    "&appid=" +
    apiToken +
    "&units=metric"
  );
}
