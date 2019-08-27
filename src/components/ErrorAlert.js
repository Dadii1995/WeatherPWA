import React from 'react'
import PropTypes from 'prop-types'

const ErrorAlert = ({ errorMessage, header, refreshWeather }) => {
  return (
    <div className="error-alert">
      <p>{header}</p>
      <p>{errorMessage}</p>
      <button
        className="modal-button"
        onClick={() => {
          refreshWeather()
        }}
      >
        Refresh
      </button>
    </div>
  )
}

ErrorAlert.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
}
export default ErrorAlert
