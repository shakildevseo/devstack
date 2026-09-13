
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Technology } from './components/Technology'

function App() {
  return (
    <>
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      <main>
        <Hero />
        <Technology />
      </main>

      <Footer />
      <ToastContainer position="top-right" autoClose={2500} />
    </>
  )
}

export default App
