
import { ToastContainer } from 'react-toastify'
import './App.css'
import { Footer } from './components/Footer'
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


       <Footer />
      <ToastContainer position="top-right" autoClose={2500} />
    </>
  )
}

export default App
