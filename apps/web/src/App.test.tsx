import { describe, test, screen, render } from 'test-config'
import App from './App'

describe('[Component]: App', () => {
  test('find text', () => {
    render(<App />)
    expect(screen.getByText('Vite + React')).toBeTruthy()
  })
})