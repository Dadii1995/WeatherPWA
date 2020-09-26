import React, { Component } from 'react'
import withWeather from '../../hocs/withWeather'
import DayWeather from './DayWeather'
import PropTypes from 'prop-types'

class NextWeekWeather extends Component {
  forecast = this.props.weather.daily
  render() {
    console.log(this.forecast)
    return (
      <div className="weather-next-week">
        <h1>Next days</h1>
        <table className="weather-next-week__days">
          <tbody>
            {this.forecast.map(({dt,temp:{min,max}}) => (
              <DayWeather
                date={new Date(dt*1000).toLocaleDateString()}
                icon='sun'
                key={dt}
                maxTemp={max}
                minTemp={min}
              />
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
NextWeekWeather.propTypes = {
  weather: PropTypes.shape({
    forecast: PropTypes.shape({
      forecastday: PropTypes.arrayOf(
        PropTypes.shape({
          date: PropTypes.string.isRequired,
          day: PropTypes.shape({
            maxtemp_c: PropTypes.number.isRequired,
            mintemp_c: PropTypes.number.isRequired,
            condition: PropTypes.shape({
              icon: PropTypes.string,
            }).isRequired,
          }).isRequired,
        }),
      ),
    }).isRequired,
  }).isRequired,
}

export default withWeather(NextWeekWeather)
