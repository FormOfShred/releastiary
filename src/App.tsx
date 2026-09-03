import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import { ThemeProvider } from "./context/ThemeProvider/ThemeProvider"
import Home from "./pages/Home"

function App() {

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Home />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
