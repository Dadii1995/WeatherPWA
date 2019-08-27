import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import LocationButton from '../LocationButton'

const renderComponent = ({ onClick, isDay }) => {
  return render(<LocationButton isDay={isDay} onClick={onClick} />)
}
const props = {
  onClick: jest.fn(),
  isDay: true,
}
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: ({ className, onClick }) => {
    return (
      <p
        className={className}
        onClick={() => {
          onClick()
        }}
      >
        Icon
      </p>
    )
  },
}))

describe('<LocationButton/>', () => {
  it('render LocationButton', () => {
    const { container } = renderComponent(props)
    expect(container.firstChild).toMatchSnapshot()
  })
  it('render night LocationButton', () => {
    const { container } = renderComponent({ ...props, isDay: false })
    expect(container.firstChild).toMatchSnapshot()
  })
  // it('click on LocationButton', () => {
  //   const { getByText, debug } = renderComponent({ props })
  //   debug()
  //   fireEvent.click(getByText('Icon'))
  //   expect(props.onClick).toHaveBeenCalled()
  // })
})
