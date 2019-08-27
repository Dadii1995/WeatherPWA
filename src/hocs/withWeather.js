import React from 'react'
import { WeatherContext } from '../contexts/WeatherContext'

export default WrappedComponent => {
  const hocComponent = ({ ...props }) => (
    <WeatherContext.Consumer>
      {weatherProps => <WrappedComponent {...props} {...weatherProps} />}
    </WeatherContext.Consumer>
  )
  return hocComponent
}
