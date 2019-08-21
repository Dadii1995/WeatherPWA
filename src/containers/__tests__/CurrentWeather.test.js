import React from 'react'
import { render } from '@testing-library/react'
import CurrentWeather from '../Weather/CurrentWeather'
import { WeatherContext } from '../../contexts/WeatherContext'

jest.mock('../Weather/NextHoursWeather', () => () => (
  <div>Next Hours</div>
))

const contextValue = {
  weather: {
    location: { localtime: '12:00', name: 'CityName' },
    current: {
      temp_c: 15.5,
      condition: { text: 'Sunny' },
    },
  },
}

const renderComponent = mockContextValue => {
  return render(
    <WeatherContext.Provider value={mockContextValue}>
      <CurrentWeather />
    </WeatherContext.Provider>,
  )
}
describe('<CurrentWeather/>', () => {
  it('render CurrentWeather with data from context', () => {
    const { getByText } = renderComponent(contextValue)
    expect(getByText(contextValue.weather.location.localtime)).toBeDefined()
    expect(getByText(contextValue.weather.location.name)).toBeDefined()
    expect(getByText(`${contextValue.weather.current.temp_c}°C`)).toBeDefined()
    expect(getByText(contextValue.weather.current.condition.text)).toBeDefined()
    expect(getByText(contextValue.weather.current.condition.text)).toBeDefined()
    expect(getByText(contextValue.weather.current.condition.text)).toBeDefined()
    expect(getByText('Next Hours')).toBeDefined()
  })
})
