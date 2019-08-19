import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faAngleLeft,
  faAngleRight,
  faCloud,
  faWind,
  faSun,
  faTemperatureHigh,
  faCloudRain,
  faCloudSun,
  faMoon,
  faCloudMoon,
} from '@fortawesome/free-solid-svg-icons'

import './assets/styles/index.css'
import { geolocated } from 'react-geolocated'

import Weather from './containers/Weather'
import withWeather from './hocs/withWeather'

class App extends Component {
  constructor(props) {
    super(props)
    library.add(
      faAngleLeft,
      faAngleRight,
      faCloud,
      faWind,
      faSun,
      faTemperatureHigh,
      faCloudRain,
      faCloudSun,
      faMoon,
      faCloudMoon,
    )
  }

  render() {
    const {
      isDay,
      weatherLocation,
      getWeather,
      setWeatherLocation,
      isGeolocationAvailable,
      coords,
      isLoading,
    } = this.props

    if (isGeolocationAvailable) {
      if (coords) {
        setWeatherLocation(`${coords.latitude},${coords.longitude}`)
      }
    }
    return <Weather getWeather={getWeather} isDay={isDay} isLoading={isLoading} weatherLocation={weatherLocation} />
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 15000,
})(withWeather(App))
