import React from 'react'
import { render } from '@testing-library/react'
import WeatherDetailsInfo from '../WeatherDetailInfo'

const renderComponent = props => {
  return render(<WeatherDetailsInfo {...props} />)
}

describe('<WeatherDetailsInfo/>', () => {
  it('render detailsInfo with number value', () => {
    const { container } = renderComponent({ value: 15, label: 'Label' })
    expect(container).toMatchSnapshot()
  })
  it('render detailsInfo with string value', () => {
    const { container } = renderComponent({ value: 'Value', label: 'Label' })
    expect(container).toMatchSnapshot()
  })
  it('render detailsInfo with unit', () => {
    const { container } = renderComponent({ value: 'Value', label: 'Label', unit: 'Unit' })
    expect(container).toMatchSnapshot()
  })
})
