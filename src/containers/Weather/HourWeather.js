import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

class HourWeather extends Component {
  render() {
    return (
      <div className="weather__hour">
        <p>{this.props.hour === new Date().getHours() ? <strong>Now</strong> : this.props.hour}</p>
        <FontAwesomeIcon icon={this.props.iconName} size="lg" />
        <p>{this.props.temperature}°C</p>
      </div>
    )
  }
}

HourWeather.propTypes = {
  hour: PropTypes.number,
  temperature: PropTypes.number,
  iconName: PropTypes.string,
}

export default HourWeather
