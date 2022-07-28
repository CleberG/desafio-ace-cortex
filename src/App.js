import { GlobalStyle } from './styles/globalStyles'
import { Card } from './components/cards'

export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Card />
      <h1>Ace Cortex</h1>
    </div>
  )
}
