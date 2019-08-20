import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import PropTypes from 'prop-types'
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
  faSearchLocation,
} from '@fortawesome/free-solid-svg-icons'

import './assets/styles/index.css'
import { geolocated } from 'react-geolocated'

import Weather from './containers/Weather'
import withWeather from './hocs/withWeather'
import DialogModal from './components/DialogModal'
import LocationButton from './components/LocationButton'

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
      faSearchLocation,
    )
    this.state = { isModalVisible: false }
  }

  closeModal = () => {
    this.setState(() => ({ isModalVisible: false }))
  }
  showModal = () => {
    this.setState(() => ({ isModalVisible: true }))
  }
  setWeatherLocation = location => {
    this.props.setWeatherLocation(location)
    this.closeModal()
  }

  render() {
    const {
      isDay,
      weatherLocation,
      getWeather,
      setWeatherLocation,
      isGeolocationAvailable,
      isGeolocationEnabled,
      coords,
      isLoading,
    } = this.props

    if (isGeolocationAvailable && isGeolocationEnabled) {
      if (coords) {
        setWeatherLocation(`${coords.latitude},${coords.longitude}`)
      }
    } else {
      //this.showModal()
    }

    return (
      <>
        <LocationButton onClick={this.showModal} isDay={isDay} />
        <DialogModal
          closeModal={this.closeModal}
          description="Geolocation is disabled or not supported in your browser. Write your location to see weather"
          header="Weather location"
          isVisible={this.state.isModalVisible}
          setLocation={this.setWeatherLocation}
        />

        <Weather
          getWeather={getWeather}
          isDay={isDay}
          isLoading={isLoading}
          weatherLocation={weatherLocation}
        />
      </>
    )
  }
}
App.propTypes = {
  isDay: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  weatherLocation: PropTypes.string.isRequired,
  getWeather: PropTypes.func.isRequired,
  setWeatherLocation: PropTypes.func,
  isGeolocationAvailable: PropTypes.bool,
  isGeolocationEnabled: PropTypes.bool,
  coords: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
  }),
}
export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  userDecisionTimeout: 5000,
})(withWeather(App))
