import React, { Component } from 'react'
import { take } from 'lodash'

import NextHoursWeather from './NextHoursWeather'
import withWeather from '../../hocs/withWeather'

class CurrentWeather extends Component {
  render() {
    const {
      weather: {
        timezone: name,
        current: { dt: localTime, temp: temp_c, weather: conditions },
        hourly,
      },
    } = this.props

    const nextHours = [
      ...take(hourly, 5).map(({ dt, temp }) => ({
        hour: new Date(dt * 1000).getHours(),
        temperature: temp,
        iconName: 'sun',
      })),
    ]

    return (
      <div className="weather__current">
        <h1 className="weather__current__temperature">{temp_c}°C</h1>
        <h2 className="weather__current__condition">{conditions[0].main}</h2>
        <h4 className="weather__current__date">{new Date(localTime * 1000).toLocaleString()}</h4>
        <h3 className="weather__current__city">{name}</h3>
        <NextHoursWeather nextHours={nextHours} />
      </div>
    )
  }
}

export default withWeather(CurrentWeather)
