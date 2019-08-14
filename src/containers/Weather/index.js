import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CurrentWeather from './CurrentWeather'
import NextWeekWeather from './NextWeekWeather'
import CurrentWeatherDetails from './CurrentWeatherDetails'

const Weather = props => {
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
        { 'weather--day': props.isDay },
        { 'weather--night': !props.isDay },
      )}
    >
      <CurrentWeather />
      <div className="weather__slider">
        <Slider {...settings}>
          <NextWeekWeather />
          <CurrentWeatherDetails />
        </Slider>
      </div>
    </div>
  )
}

Weather.propTypes = {
  isDay: PropTypes.bool.isRequired,
}

export default Weather
