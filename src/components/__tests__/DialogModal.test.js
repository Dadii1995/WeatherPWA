import React from 'react'
import { render, fireEvent, wait } from '@testing-library/react'
import DialogModal from '../DialogModal'

const renderComponent = props => {
  return render(<DialogModal {...props} />)
}
const props = {
  closeModal: jest.fn(x => x),
  header: 'header',
  isVisible: true,
  setLocation: jest.fn(x => x),
}

describe('<DialogModal/>', () => {
  it('render DialogModal with header and decription', () => {
    const { container } = renderComponent(props)
    expect(container.firstChild).toMatchSnapshot()
  })
  it('render DialogModal without -visible classname', () => {
    const { container } = renderComponent({ ...props, isVisible: false })
    expect(container.firstChild).toMatchSnapshot()
  })
  it('click close button on modal', () => {
    const { getByText } = renderComponent(props)
    fireEvent.click(getByText('Close'))

    expect(props.closeModal).toHaveBeenCalled()
  })
  it('click set button on modal', async () => {
    const testLocation = 'TestLocation'
    const { getByText, getByPlaceholderText } = renderComponent(props)
    fireEvent.change(getByPlaceholderText('Weather Location'), {
      target: { value: testLocation },
    })
    fireEvent.click(getByText('Set'))
    await wait(() => {
      expect(props.setLocation).toHaveBeenCalled()
      expect(props.setLocation).toHaveBeenCalledWith(testLocation)
    })
  })
})
