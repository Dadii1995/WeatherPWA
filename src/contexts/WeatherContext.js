import React, { Component } from 'react'
import axios from 'axios'

export const WeatherContext = React.createContext({
  weather: JSON.parse(localStorage.getItem('weather')) || {},
})

class WeatherProvider extends Component {
  state = {
    weather: JSON.parse(localStorage.getItem('weather')) || {},
    isLoading: true,
    error: undefined,
    weatherLocation: JSON.parse(localStorage.getItem('weatherLocation')) || {
      lat: 49.8223768,
      long: 19.0583845,
    },
  }

  shouldComponentUpdate(nextProps, nextState) {
    const shouldUpdate =
      nextState.weatherLocation !== this.state.weatherLocation ||
      this.state.error !== nextState.error ||
      this.state.isLoading !== nextState.isLoading
    return shouldUpdate
  }

  setWeatherLocation = location => {
    console.log('Set:', location)
    localStorage.setItem('weatherLocation', JSON.stringify(location))
    this.setState(() => ({ weatherLocation: location }))
  }
  setLoading = isLoading => {
    this.setState(() => ({ isLoading }))
  }
  setError = error => {
    this.setState(() => ({ error }))
  }
  setWeather = weather => {
    localStorage.setItem('weather', JSON.stringify(weather))
    this.setState(() => ({ weather }))
  }

  getWeather = () => {
    this.setLoading(true)
    this.setError(undefined)
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=49.8223768&lon=19.0583845&exclude=minutely,alerts&units=metric&appid=${
          process.env.REACT_APP_WEATHER_API_KEY
        }`,
      )
      .then(response => {
        this.setWeather(response.data)
        this.setLoading(false)
      })
      .catch(error => {
        this.setError(error)
        this.setLoading(false)
      })
  }

  render() {
    const { weather, error, isLoading, weatherLocation } = this.state
    return (
      <WeatherContext.Provider
        value={{
          weather,
          getWeather: this.getWeather,
          setWeatherLocation: this.setWeatherLocation,
          weatherLocation,
          isDay: Boolean(weather.current && weather.current.is_day),
          isLoading,
          error,
        }}
      >
        {this.props.children}
      </WeatherContext.Provider>
    )
  }
}

export default WeatherProvider
