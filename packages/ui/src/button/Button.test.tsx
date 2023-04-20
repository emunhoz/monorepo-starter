import { describe, test, render, screen } from 'test-config'
import { Button } from './Button'

describe('[Component]: Button', () => {
  test('find button text', () => {
    render(<Button label={'Hello from ui package!'} />)
    expect(screen.getByText('Hello from ui package!')).toBeTruthy()
  })
})