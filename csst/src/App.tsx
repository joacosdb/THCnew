import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './Components/Ui/NavBar'
import { Footer } from './Components/Ui/Footer'
import { Hero } from './Components/Screens/Hero'
import { Landing } from './Components/Screens/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar/>
     <Hero/>
     <Landing/>
     <Footer/>
    </>
  )
}

export default App
