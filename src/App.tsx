import DateNavigator from "./components/DateNavigator/DateNavigator"
import GameGrid from "./components/GameGrid/GameGrid"
import Header from "./components/Header/Header"
import { ThemeProvider } from "./context/ThemeProvider/ThemeProvider"

function App() {

  return (
    <ThemeProvider>
      <Header />
      <DateNavigator />
      <GameGrid />
    </ThemeProvider>
  )
}

export default App
