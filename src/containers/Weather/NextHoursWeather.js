import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HourWeather from './HourWeather'

class NextHoursWeather extends Component {
  nextHours = [
    {
      hour: new Date().getHours(),
      iconName: 'temperature-high',
      temperature: this.props.temperatureNow,
    },
    {
      hour: new Date().getHours() + 1,
      iconName: 'sun',
      temperature: 25,
    },
    {
      hour: new Date().getHours() + 2,
      iconName: 'sun',
      temperature: 28,
    },
    {
      hour: new Date().getHours() + 3,
      iconName: 'cloud-sun',
      temperature: 25,
    },
    {
      hour: new Date().getHours() + 4,
      iconName: 'wind',
      temperature: 23,
    },
  ]
  render() {
    return (
      <div className="weather__current__next-hours">
        {this.nextHours.map((hour, i) => {
          return <HourWeather key={i} {...hour} />
        })}
      </div>
    )
  }
}

NextHoursWeather.propTypes = {
  temperatureNow: PropTypes.number.isRequired,
}

export default NextHoursWeather
