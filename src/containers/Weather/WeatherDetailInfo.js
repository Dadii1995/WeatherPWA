import React from 'react'
import PropTypes from 'prop-types'

const WeatherDetailsInfo = props => {
  return (
    <div className="weather-details-info">
      <p className="weather-details-info__value">
        {props.value}
        {props.unit}
      </p>
      <p className="weather-details-info__label">{props.label}</p>
    </div>
  )
}

WeatherDetailsInfo.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  unit: PropTypes.string,
}

export default WeatherDetailsInfo
