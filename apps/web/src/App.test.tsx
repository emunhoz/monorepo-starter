import { describe, test } from 'vitest'
import { screen, render  } from '@testing-library/react'

import App from './App'

describe('[Component]: App', () => {
  test('find text', () => {
    render(<App />)
    expect(screen.getByText('Vite + React')).toBeTruthy()
  })
})