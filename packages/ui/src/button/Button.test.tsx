import { describe, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('[Component]: Button', () => {
  test('find text', () => {
    render(<Button />)

    expect(screen.getByText('Hello from ui package!')).toBeTruthy()
  })
})