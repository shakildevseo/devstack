
import './App.css'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <>
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      <main>
        <Hero />
      </main>
    </>
  )
}

export default App
