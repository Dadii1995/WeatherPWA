import React from 'react'
import { render } from '@testing-library/react'
import NextWeekWeather from '../NextWeekWeather'
import { WeatherContext } from '../../../contexts/WeatherContext'

jest.mock('../DayWeather', () => ({ date }) => (
  <tr data-testid="day-weather">
    <td>{date}</td>
  </tr>
))
const contextValue = {
  weather: {
    forecast: {
      forecastday: [
        {
          date: '22.08.2019',
          day: {
            condition: {
              icon: 'icon',
            },
            maxtemp_c: 29,
            mintemp_c: 13,
          },
        },
        {
          date: '23.08.2019',
          day: {
            condition: {
              icon: 'icon',
            },
            maxtemp_c: 29,
            mintemp_c: 13,
          },
        },
        {
          date: '24.08.2019',
          day: {
            condition: {
              icon: 'icon',
            },
            maxtemp_c: 29,
            mintemp_c: 13,
          },
        },
        {
          date: '25.08.2019',
          day: {
            condition: {
              icon: 'icon',
            },
            maxtemp_c: 29,
            mintemp_c: 13,
          },
        },
        {
          date: '26.08.2019',
          day: {
            condition: {
              icon: 'icon',
            },
            maxtemp_c: 29,
            mintemp_c: 13,
          },
        },
        {
          date: '27.08.2019',
          day: {
            condition: {
              icon: 'icon',
            },
            maxtemp_c: 29,
            mintemp_c: 13,
          },
        },
        {
          date: '28.08.2019',
          day: {
            condition: {
              icon: 'icon',
            },
            maxtemp_c: 29,
            mintemp_c: 13,
          },
        },
      ],
    },
  },
}
const renderComponent = mockContextValue => {
  return render(
    <WeatherContext.Provider value={mockContextValue}>
      <NextWeekWeather />
    </WeatherContext.Provider>,
  )
}
describe('<NextWeekWeather/>', () => {
  it('render NextWeekWeather for 6 days', () => {
    const { queryByText, getAllByTestId } = renderComponent(contextValue)

    expect(getAllByTestId('day-weather')).toHaveLength(
      contextValue.weather.forecast.forecastday.length - 1,
    )

    for (let i = 0; i < contextValue.weather.forecast.forecastday.length; i++) {
      i === 0
        ? expect(queryByText(contextValue.weather.forecast.forecastday[i].date)).toBeNull()
        : expect(queryByText(contextValue.weather.forecast.forecastday[i].date)).toBeDefined()
    }
  })
})
