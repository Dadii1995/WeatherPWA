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
    const currentHour = new Date().getHours()
    const nextHours = [
      {
        hour: currentHour,
        iconName: 'temperature-high',
        temperature: temp_c,
      },
      {
        hour: (currentHour + 1) % 24,
        iconName: 'sun',
        temperature: 25,
      },
      {
        hour: (currentHour + 2) % 24,
        iconName: 'sun',
        temperature: 28,
      },
      {
        hour: (currentHour + 3) % 24,
        iconName: 'cloud-sun',
        temperature: 25,
      },
      {
        hour: (currentHour + 4) % 24,
        iconName: 'wind',
        temperature: 23,
      },
    ]

    return (
      <div className="weather__current">
        <h1 className="weather__current__temperature">{temp_c}°C</h1>
        <h2 className="weather__current__condition">{text}</h2>
        <h4 className="weather__current__date">{localtime}</h4>
        <h3 className="weather__current__city">{name}</h3>
        <NextHoursWeather nextHours={nextHours} />
      </div>
    )
  }
}

export default withWeather(CurrentWeather)
