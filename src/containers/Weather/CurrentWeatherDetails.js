import React from 'react'
import withWeather from '../../hocs/withWeather'
import PropTypes from 'prop-types'
import WeatherDetailsInfo from './WeatherDetailInfo'

const CurrentWeatherDetails = props => {
  const {
    weather: {
      current: { wind_kph, pressure_mb, cloud, feelslike_c, uv, humidity },
      forecast: {
        forecastday: [
          {
            astro: { sunrise, sunset },
          },
        ],
      },
    },
  } = props
  return (
    <div className="weather-details">
      <h1>Details</h1>
      <div className="weather-details__sunrise-sunset">
        <div className="weather-details__sunrise-sunset__hour">
          <img alt="sunrise icon" height="24px" src="/images/sunrise.png" />
          <span>{sunrise}</span>
        </div>
        <div className="weather-details__sunrise-sunset__hour">
          <span>{sunset}</span>
          <img alt="sunset icon" height="24px" src="/images/sunset.png" />
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
      condition: PropTypes.shape({
        text: PropTypes.string,
      }).isRequired,
      wind_kph: PropTypes.number,
      pressure_mb: PropTypes.number,
      cloud: PropTypes.number,
      feelslike_c: PropTypes.number,
      uv: PropTypes.number,
      humidity: PropTypes.number,
    }).isRequired,
    forecast: PropTypes.shape({
      forecastday: PropTypes.arrayOf(
        PropTypes.shape({
          day: PropTypes.shape({
            maxtemp_c: PropTypes.number,
            mintemp_c: PropTypes.number,
          }).isRequired,
          astro: PropTypes.shape({
            sunrise: PropTypes.string,
            sunset: PropTypes.string,
          }).isRequired,
        }),
      ),
    }).isRequired,
  }).isRequired,
}

export default withWeather(CurrentWeatherDetails)
