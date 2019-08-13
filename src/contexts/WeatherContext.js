import React, { Component } from 'react'
import axios from 'axios'
import dotenv from 'dotenv'

export const WeatherContext = React.createContext({
  weather: JSON.parse(localStorage.getItem('weather')) || {},
})

class WeatherProvider extends Component {
  state = { weather: JSON.parse(localStorage.getItem('weather')) || {} }

  getWeather = query => {
    const env = dotenv.config().parsed
    console.log(env)
    const { APIXU_API_KEY } = process.env
    console.log(APIXU_API_KEY)
    axios
      // .get(`http://api.apixu.com/v1/forecast.json?key=${process.env.APIXU_API_KEY}&q=${query}&days=7`)
      .get(
        `http://api.apixu.com/v1/forecast.json?key=28e74991e5d647e8948103820190907&q=${query}&days=7`,
      )
      .then(response => {
        this.setState(() => {
          localStorage.setItem('weather', JSON.stringify(response.data))
          return { weather: response.data }
        })
      })
  }
  render() {
    const { weather } = this.state
    return (
      <WeatherContext.Provider value={{ weather, getWeather: this.getWeather }}>
        {this.props.children}
      </WeatherContext.Provider>
    )
  }
}

export default WeatherProvider
