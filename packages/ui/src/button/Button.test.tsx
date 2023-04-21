import { describe, test } from 'vitest'
import { screen, render  } from '@testing-library/react'
import { Button } from './Button'

describe('[Component]: Button', () => {
  test('find button text', () => {
    render(<Button label={'Hello from ui package!'} />)
    expect(screen.getByText('Hello from ui package!')).toBeTruthy()
  })
})