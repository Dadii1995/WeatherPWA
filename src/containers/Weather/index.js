import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CurrentWeather from './CurrentWeather'
import NextWeekWeather from './NextWeekWeather'
import CurrentWeatherDetails from './CurrentWeatherDetails'
import LoadingSpinner from '../../components/LoadingSpinner'

class Weather extends Component {
  componentDidMount() {
    this.props.getWeather()
  }

  componentDidUpdate(prevProps) {
    if (this.props.weatherLocation !== prevProps.weatherLocation) {
      this.props.getWeather()
    }
  }
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.weatherLocation !== this.props.weatherLocation ||
      nextProps.isLoading !== this.props.isLoading ||
      nextProps.error !== this.props.error
    )
  }

  render() {
    const settings = {
      dots: true,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    }

    return (
      <div
        className={classNames(
          'weather',
          { 'weather--day': this.props.isDay },
          { 'weather--night': !this.props.isDay },
        )}
      >
        {this.props.isLoading ? (
          <LoadingSpinner color={this.props.isDay ? '#000' : '#FFF'} />
        ) : (
          <>
            <CurrentWeather />
            <div className="weather__slider weather__slider -mobile">
              <Slider {...settings}>
                <NextWeekWeather />
                <CurrentWeatherDetails />
              </Slider>
            </div>
            <div className="weather__slider weather__slider -md">
              <CurrentWeatherDetails />
              <NextWeekWeather />
            </div>
          </>
        )}
      </div>
    )
  }
}

Weather.propTypes = {
  isDay: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  weatherLocation: PropTypes.string.isRequired,
  getWeather: PropTypes.func.isRequired,
}

export default Weather
