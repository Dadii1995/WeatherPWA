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

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
        this.setWeatherLocation(`${latitude},${longitude}`)
      })
    }
  }

  componentDidMount() {
    this.getLocation()
  }

  render() {
    const { isDay } = this.props

    return (
      <>
        <LocationButton isDay={isDay} onClick={this.showModal} />
        <DialogModal
          closeModal={this.closeModal}
          description="Geolocation is disabled or not supported in your browser. Write your location to see weather"
          header="Weather location"
          isVisible={this.state.isModalVisible}
          setLocation={this.setWeatherLocation}
        />
        <Weather />
      </>
    )
  }
}
App.propTypes = {
  isDay: PropTypes.bool.isRequired,
  setWeatherLocation: PropTypes.func,
}
export default withWeather(App)
