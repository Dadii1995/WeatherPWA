import React from 'react'
import { render } from '@testing-library/react'
import Weather from '../Weather'

jest.mock('../../components/LoadingSpinner', () => () => <div>LoadingSpinner</div>)
jest.mock('../../components/ErrorAlert', () => props => <div>ErrorAlert</div>)
jest.mock('../Weather/CurrentWeather', () => () => <div>CurrentWeather</div>)
jest.mock('../Weather/NextWeekWeather', () => () => <div>NextWeekWeather</div>)
jest.mock('../Weather/CurrentWeatherDetails', () => () => <div>CurrentWeatherDetails</div>)

const props = {
  isDay: true,
  error: undefined,
  isLoading: false,
  weatherLocation: 'City',
  getWeather: jest.fn(x => x),
}

const renderComponent = props => {
  return render(<Weather {...props} />)
}
describe('<Weather/>', () => {
  it('render Weather', () => {
    const { queryAllByText } = renderComponent(props)
    expect(queryAllByText('LoadingSpinner')).toHaveLength(0)
    expect(queryAllByText('ErrorAlert')).toHaveLength(0)
    expect(queryAllByText('CurrentWeather')).not.toHaveLength(0)
    expect(queryAllByText('NextWeekWeather')).not.toHaveLength(0)
    expect(queryAllByText('CurrentWeatherDetails')).not.toHaveLength(0)
    expect(props.getWeather).toHaveBeenCalled()
  })
  it('render Weather with night theme', () => {
    const { getByTestId } = renderComponent({ ...props, isDay: false })
    expect(getByTestId('weather-div').classList.contains('weather--day')).toBeFalsy()
    expect(getByTestId('weather-div').classList.contains('weather--night')).toBeTruthy()
  })
  it('render Weather with day theme', () => {
    const { getByTestId } = renderComponent(props)
    expect(getByTestId('weather-div').classList.contains('weather--night')).toBeFalsy()
    expect(getByTestId('weather-div').classList.contains('weather--day')).toBeTruthy()
  })
  it('render Loading', () => {
    const { queryAllByText } = renderComponent({ ...props, isLoading: true })
    expect(queryAllByText('LoadingSpinner')).not.toHaveLength(0)
    expect(queryAllByText('ErrorAlert')).toHaveLength(0)
    expect(queryAllByText('CurrentWeather')).toHaveLength(0)
    expect(queryAllByText('NextWeekWeather')).toHaveLength(0)
    expect(queryAllByText('CurrentWeatherDetails')).toHaveLength(0)
  })
})
