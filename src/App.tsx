import Header from "./components/Header/Header"
import { ThemeProvider } from "./context/ThemeProvider/ThemeProvider"

function App() {

  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  )
}

export default App
