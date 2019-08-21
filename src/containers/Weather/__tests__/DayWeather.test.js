import React from 'react'
import { render } from '@testing-library/react'
import DayWeather from '../DayWeather'

const props = {
  date: '21-08-2019',
  icon: '//cdn.apixu.com/weather/64x64/day/113.png',
  minTemp: 15,
  maxTemp: 25,
}
const renderComponent = props => {
  return render(
    <table>
      <tbody>
        <DayWeather {...props} />
      </tbody>
    </table>,
  )
}
describe('<DayWeather/>', () => {
  it('render DayWeather ', () => {
    const { getByText } = renderComponent(props)
    expect(getByText(props.date)).toBeDefined()
    expect(getByText(`${props.minTemp}°C`)).toBeDefined()
    expect(getByText(`${props.maxTemp}°C`)).toBeDefined()
  })
})
