import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";
import './styles.scss';

export default function WeatherView(props: any) {

  const { weatherData } = props;
  return (
    <Card className="weather-card">
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <img className="weather-icon" src={"http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png"} alt="" />
            <small className="weather-description">
              {weatherData.weather[0].description}
            </small>
          </Grid>
          <Grid item xs={8}>
            <h3>{weatherData.name}, {weatherData.sys.country}</h3>
            <Typography component="h5" variant="h5">
              {weatherData.main.temp}°C
          </Typography>
            <small>Feels Like {weatherData.main.feels_like}°C</small>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
