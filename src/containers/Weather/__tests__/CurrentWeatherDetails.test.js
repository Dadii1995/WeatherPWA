import { render } from '@testing-library/react'
import CurrentWeatherDetails from '../CurrentWeatherDetails'
import { WeatherContext } from '../../../contexts/WeatherContext'
import React from 'react'

jest.mock('../WeatherDetailInfo', () => () => <div>WeatherDetailsInfo</div>)
const contextValue = {
  weather: {
    current: { wind_kph: 12, pressure_mb: 1025, cloud: 2, feelslike_c: 23.4, uv: 5, humidity: 43 },
    forecast: {
      forecastday: [
        {
          astro: { sunrise: '06:12AM', sunset: '09:43PM' },
        },
      ],
    },
  },
}

const renderComponent = mockContextValue => {
  return render(
    <WeatherContext.Provider value={mockContextValue}>
      <CurrentWeatherDetails />
    </WeatherContext.Provider>,
  )
}
describe('<CurrentWeatherDetails/>', () => {
  it('render CurrentWeatherDetails with data from context', () => {
    const { getByText, getAllByText } = renderComponent(contextValue)
    expect(getByText(contextValue.weather.forecast.forecastday[0].astro.sunrise)).toBeDefined()
    expect(getByText(contextValue.weather.forecast.forecastday[0].astro.sunset)).toBeDefined()
    expect(getAllByText('WeatherDetailsInfo')).toHaveLength(6)
  })
})
