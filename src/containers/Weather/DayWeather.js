import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DayWeather = props => {
  const { date, icon, minTemp, maxTemp } = props

  return (
    <tr className="weather-next-week__day">
      <td className="weather-next-week__day__date">{date}</td>
      <td className="weather-next-week__day__icon">
        <FontAwesomeIcon icon={icon} size="lg" />
      </td>
      <td className="weather-next-week__day__max-temp">{maxTemp}°C</td>
      <td className="weather-next-week__day__min-temp">{minTemp}°C</td>
    </tr>
  )
}

DayWeather.propTypes = {
  date: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  minTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
}

export default DayWeather
