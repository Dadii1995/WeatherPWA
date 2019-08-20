import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LocationButton = props => {
  return (
    <FontAwesomeIcon
      className={classNames('set-location-button', { '-night': !props.isDay })}
      icon="search-location"
      onClick={() => {
        props.onClick()
      }}
      size="lg"
    />
  )
}

LocationButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isDay: PropTypes.bool,
}

export default LocationButton
