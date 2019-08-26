import React from 'react'
import { CircleLoader } from 'react-spinners'

const LoadingSpinner = ({color}) => {
  return (
    <div className="loading-spinner">
      <CircleLoader size={150} sizeUnit={'px'} color={color} />
    </div>
  )
}

export default LoadingSpinner
