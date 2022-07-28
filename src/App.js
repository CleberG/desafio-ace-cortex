import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/globalStyles'
import Router from './routes'

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router />
      <h1>Ace Cortex</h1>
    </BrowserRouter>
  )
}
