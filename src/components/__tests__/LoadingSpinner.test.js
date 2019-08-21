import React from 'react'
import { render } from '@testing-library/react'
import LoadingSpinner from '../LoadingSpinner'

const renderComponent = color => {
  return render(<LoadingSpinner color={color} />)
}

describe('<LoadningSpinner/>', () => {
  it('render white spinner', () => {
    const { container } = renderComponent('#FFF')
    expect(container.firstChild).toMatchSnapshot()
  })
  it('render black spinner', () => {
    const { container } = renderComponent('#000')
    expect(container.firstChild).toMatchSnapshot()
  })
})
