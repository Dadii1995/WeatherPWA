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
import ErrorAlert from '../../components/ErrorAlert'
import withWeather from '../../hocs/withWeather'

class Weather extends Component {
  state = {}
  componentDidMount() {
    this.props.getWeather()
    this.setState(() => ({
      isErrorVisible: true,
    }))
  }

  componentDidUpdate(prevProps) {
    if (this.props.weatherLocation !== prevProps.weatherLocation) {
      this.props.getWeather()
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (
      nextProps.weatherLocation !== this.props.weatherLocation ||
      nextProps.isLoading !== this.props.isLoading ||
      nextProps.error !== this.props.error ||
      this.state.isErrorVisible !== nextState.isErrorVisible
    )
  }

  refreshWeather = () => {
    this.props.getWeather()
  }
  closeErrorModal = () => {
    this.setState(() => ({ isErrorVisible: false }))
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
        data-testId="weather-div"
      >
        {this.props.isLoading ? (
          <LoadingSpinner color={this.props.isDay ? '#000' : '#FFF'} />
        ) : (
          <>
            {this.props.error && (
              <ErrorAlert
                closeModal={this.closeErrorModal}
                errorMessage={this.props.error.toJSON().message}
                header={this.props.error.toJSON().name}
                isVisible={this.state.isErrorVisible && this.props.error}
                refreshWeather={this.refreshWeather}
              />
            )}
            <CurrentWeather />
            <div className="weather__slider -mobile">
              <Slider {...settings}>
                <NextWeekWeather />
                <CurrentWeatherDetails />
              </Slider>
            </div>
            <div className="weather__slider -md">
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
  error: PropTypes.object,
  weatherLocation: PropTypes.string.isRequired,
  getWeather: PropTypes.func.isRequired,
}

export default withWeather(Weather)
