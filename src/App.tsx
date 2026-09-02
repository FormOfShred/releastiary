import DateNavigator from "./components/DateNavigator/DateNavigator"
import Header from "./components/Header/Header"
import { ThemeProvider } from "./context/ThemeProvider/ThemeProvider"

function App() {

  return (
    <ThemeProvider>
      <Header />
      <DateNavigator />
    </ThemeProvider>
  )
}

export default App
