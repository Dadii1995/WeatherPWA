import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HourWeather from './HourWeather'

class NextHoursWeather extends Component {
  render() {
    return (
      <div className="weather__current__next-hours">
        {this.props.nextHours.map((hour, i) => {
          return <HourWeather key={i} {...hour} />
        })}
      </div>
    )
  }
}

NextHoursWeather.propTypes = {
  nextHours: PropTypes.arrayOf(
    PropTypes.shape({
      hour: PropTypes.number,
      iconName: PropTypes.string,
      temperature: PropTypes.number,
    }),
  ).isRequired,
}
export default NextHoursWeather
