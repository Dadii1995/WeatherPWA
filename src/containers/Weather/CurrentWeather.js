import React, { Component } from 'react'
import NextHoursWeather from './NextHoursWeather'
import withWeather from '../../hocs/withWeather'

class CurrentWeather extends Component {

  render() {
    const {
      weather: {
        location: { localtime, name },
        current: {
          temp_c,
          condition: { text },
        },
      },
    } = this.props
    return (
      <div className="weather__current">
        <h1 className="weather__current__temperature">{temp_c}°C</h1>
        <h2 className="weather__current__condition">{text}</h2>
        <h4 className="weather__current__date">{localtime}</h4>
        <h3 className="weather__current__city">{name}</h3>
        <NextHoursWeather temperatureNow={temp_c} />
      </div>
    )
  }
}

export default withWeather(CurrentWeather)
