import { useState } from 'react'
import './App.css'
import Info from './components/info'
import About from './components/about'
import Interests from './components/interests'
import Footer from './components/footer'

function App() {
  return (
    <main>
      <Info />
      <About />
      <Interests />
      <Footer />
    </main>
  )
}

export default App
