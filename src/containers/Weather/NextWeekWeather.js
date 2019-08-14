import React, { Component } from 'react'
import withWeather from '../../hocs/withWeather'
import DayWeather from './DayWeather'

class NextWeekWeather extends Component {
  forecast = this.props.weather.forecast.forecastday.slice(1)
  render() {
    return (
      <div className="weather-next-week">
        <h1>Next days</h1>
        <table className="weather-next-week__days">
          <tbody>
            {this.forecast.map((day, i) => (
              <DayWeather
                date={day.date}
                icon={day.day.condition.icon}
                key={i}
                maxTemp={day.day.maxtemp_c}
                minTemp={day.day.mintemp_c}
              />
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default withWeather(NextWeekWeather)
