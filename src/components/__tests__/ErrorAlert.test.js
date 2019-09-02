import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ErrorAlert from '../ErrorAlert'

const renderComponent = props => {
  return render(<ErrorAlert {...props} />)
}
const props = {
  header: 'header',
  errorMessage: 'Error Message',
  isVisible: true,
  closeModal: jest.fn(),
  refreshWeather: jest.fn(),
}

describe('<ErrorAlert/>', () => {
  it('render Error alert', () => {
    const { container } = renderComponent(props)
    expect(container.firstChild).toMatchSnapshot()
  })
  it('close Error alert', () => {
    const { getByTestId } = renderComponent(props)
    fireEvent.click(getByTestId('close-button'))
    expect(props.closeModal).toHaveBeenCalled()
  })
  it('refresh weather', () => {
    const { getByTestId } = renderComponent(props)
    fireEvent.click(getByTestId('refresh-button'))
    expect(props.refreshWeather).toHaveBeenCalled()
  })
})
