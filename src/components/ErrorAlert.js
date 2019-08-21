import React from 'react'
import PropTypes from 'prop-types'

const ErrorAlert = ({ errorMessage, header }) => {
  return (
    <div className="error-alert">
      <h1>{header}</h1>
      <p>{errorMessage}</p>
    </div>
  )
}

ErrorAlert.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
}
export default ErrorAlert
