import React, { Component } from 'react'
import axios from 'axios'

export const WeatherContext = React.createContext({
  weather: JSON.parse(localStorage.getItem('weather')) || {},
})

class WeatherProvider extends Component {
  state = {
    weather: JSON.parse(localStorage.getItem('weather')) || {},
    isLoading: true,
    weatherLocation: localStorage.getItem('weatherLocation') || 'Bielsko-Biała',
  }
  setWeatherLocation = location => {
    localStorage.setItem('weatherLocation', location)
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
    this.setError('')
    axios
      .get(
        `http://api.apixu.com/v1/forecast.json?key=${process.env.REACT_APP_APIXU_API_KEY}&q=${
          this.state.weatherLocation
        }&days=7`,
      )
      .then(response => {
        this.setWeather(response.data)
        this.setLoading(false)
      })
      .catch(error => {
        console.error('APIXU Error', error)
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
