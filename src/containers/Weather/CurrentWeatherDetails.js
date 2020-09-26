import React from 'react'
import withWeather from '../../hocs/withWeather'
import PropTypes from 'prop-types'
import WeatherDetailsInfo from './WeatherDetailInfo'

const CurrentWeatherDetails = props => {
  const {
    weather: {
      current: {
        sunrise,
        sunset,
        wind_speed: wind_kph,
        pressure: pressure_mb,
        clouds: cloud,
        feels_like: feelslike_c,
        uvi: uv,
        humidity,
      },
    },
  } = props
  return (
    <div className="weather-details">
      <h1>Details</h1>
      <div className="weather-details__sunrise-sunset">
        <div className="weather-details__sunrise-sunset__hour">
          <img alt="sunrise icon" height="24px" src="/images/sunrise.png" width="24px" />
          <span>{new Date(sunrise * 1000).toLocaleTimeString()}</span>
        </div>
        <div className="weather-details__sunrise-sunset__hour">
          <span>{new Date(sunset * 1000).toLocaleTimeString()}</span>
          <img alt="sunset icon" height="24px" src="/images/sunset.png" width="24px" />
        </div>
      </div>
      <div className="weather-details-info-box">
        <WeatherDetailsInfo label="Cloud" value={cloud} />
        <WeatherDetailsInfo label="Humidity" unit="%" value={humidity} />
        <WeatherDetailsInfo label="Feels Like" unit="°C" value={feelslike_c} />
        <WeatherDetailsInfo label="Wind" unit="kph" value={wind_kph} />
        <WeatherDetailsInfo label="UV Index" value={uv} />
        <WeatherDetailsInfo label="Pressure" unit="hPa" value={pressure_mb} />
      </div>
    </div>
  )
}

CurrentWeatherDetails.propTypes = {
  weather: PropTypes.shape({
    current: PropTypes.shape({
      wind_speed: PropTypes.number,
      pressure: PropTypes.number,
      clouds: PropTypes.number,
      feels_like: PropTypes.number,
      uvi: PropTypes.number,
      humidity: PropTypes.number,
      sunrise: PropTypes.number,
      sunset: PropTypes.number,
    }).isRequired,
  }).isRequired,
}

export default withWeather(CurrentWeatherDetails)
