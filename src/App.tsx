import Header from "./components/Header/Header"
import { ThemeProvider } from "./context/ThemeProvider/ThemeProvider"
import Home from "./pages/Home"

function App() {

  return (
    <ThemeProvider>
      <Header />
      <Home />
    </ThemeProvider>
  )
}

export default App
