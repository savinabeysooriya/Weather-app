import { Card, CardContent } from "@material-ui/core";
import React from "react";
import Slider from "react-slick";
import './styles.scss';


export default function ForecastView(props: any) {
  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  function getDayFromDate(dt: number) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let d = new Date(dt * 1000);
    return days[d.getDay()];
  }

  let fiveDayArr = props.forecastData.daily.slice(0, 5);
  return (
    <div className="forecast-view">
      <Slider {...settings}>
        {fiveDayArr.map((day: any) =>
          <div key={day.dt}>
            <Card key={day.dt} className="forecast-day-card">
              <CardContent>
                <span className="forecast-day-temp">{getDayFromDate(day.dt)}</span>
                <img className="weather-icon" src={"http://openweathermap.org/img/wn/" + day.weather[0].icon + "@2x.png"} alt="" />
                <small className="weather-description">
                  {day.weather[0].description}
                </small>
              </CardContent>
            </Card>
          </div>
        )}
      </Slider>
    </div>
  );
}
