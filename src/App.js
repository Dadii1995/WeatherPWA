import React, { useContext } from 'react'
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

import { WeatherContext } from './contexts/WeatherContext'
import Weather from './containers/Weather'

function App() {
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
  const { isDay } = useContext(WeatherContext)

  return <Weather isDay={isDay} />
}

export default App
