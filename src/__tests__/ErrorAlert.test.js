import React from 'react'
import { render } from '@testing-library/react'
import ErrorAlert from '../components/ErrorAlert'

const renderComponent = props => {
  return render(<ErrorAlert {...props} />)
}
const props = {
  header: 'header',
  errorMessage: 'Error Message',
}

describe('<ErrorAlert/>', () => {
  it('render Error alert', () => {
    const { container } = renderComponent(props)
    expect(container.firstChild).toMatchSnapshot()
  })
})
