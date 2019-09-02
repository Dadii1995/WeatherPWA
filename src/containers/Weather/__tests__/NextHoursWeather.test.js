import React from 'react'
import { render } from '@testing-library/react'
import NextHoursWeather from '../NextHoursWeather'

jest.mock('../HourWeather', () => ({ hour, iconName, temperature }) => (
  <div>
    {hour}-{iconName}-{temperature}
  </div>
))
const currentHour = new Date().getHours()
const nextHours = [
  {
    hour: currentHour,
    iconName: 'temperature-high',
    temperature: 23,
  },
  {
    hour: (currentHour + 1) % 24,
    iconName: 'sun',
    temperature: 25,
  },
  {
    hour: (currentHour + 2) % 24,
    iconName: 'sun',
    temperature: 28,
  },
  {
    hour: (currentHour + 3) % 24,
    iconName: 'cloud-sun',
    temperature: 25,
  },
  {
    hour: (currentHour + 4) % 24,
    iconName: 'wind',
    temperature: 23,
  },
]

const renderComponent = nextHours => {
  return render(<NextHoursWeather nextHours={nextHours} />)
}
describe('<NextHoursWeather/>', () => {
  it('render all hours weather', () => {})
  const { getByText } = renderComponent(nextHours)
  nextHours.forEach(({ hour, temperature, iconName }) => {
    expect(getByText(`${hour}-${iconName}-${temperature}`)).toBeDefined()
  })
})
