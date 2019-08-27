import React from 'react'
import { render } from '@testing-library/react'
import HourWeather from '../HourWeather'

jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: ({ icon }) => <p>{icon}</p>,
}))

const renderComponent = props => {
  return render(<HourWeather {...props} />)
}

const props = {
  hour: new Date().getHours(),
  iconName: 'IconName',
  temperature: 13.3,
}

describe('<HourWeather/>', () => {
  it('render Weather for current hour', () => {
    const { getByText, queryByText } = renderComponent(props)
    expect(getByText('Now')).toBeDefined()
    expect(queryByText(props.hour.toString())).toBeNull()
    expect(getByText(props.iconName)).toBeDefined()
    expect(getByText(`${props.temperature}°C`)).toBeDefined()
  })
  it('render Weather for any hour', () => {
    const { getByText, queryByText } = renderComponent({
      ...props,
      hour: new Date().getHours() + 1,
    })
    expect(queryByText('Now')).toBeNull()
    expect(queryByText(props.hour.toString())).toBeDefined()
    expect(getByText(props.iconName)).toBeDefined()
    expect(getByText(`${props.temperature}°C`)).toBeDefined()
  })
})
