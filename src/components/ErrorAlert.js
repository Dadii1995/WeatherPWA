import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ErrorAlert = ({ isVisible, header, errorMessage, refreshWeather, closeModal }) => {
  return (
    <div className={classNames('modal', { '-visible': isVisible })}>
      <div className="modal__dialog">
        <button className="close-button" onClick={closeModal} data-testid="close-button">
          <FontAwesomeIcon icon="times" size="lg" />
        </button>

        <h1>{header}</h1>
        <div className="modal__description">
          <p>{errorMessage}</p>
        </div>

        <button
          className="set-button"
          data-testid="refresh-button"
          onClick={() => {
            refreshWeather()
          }}
        >
          Refresh
        </button>
      </div>
    </div>
  )
}

ErrorAlert.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  refreshWeather: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
}
export default ErrorAlert
