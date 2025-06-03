import React from 'react'
import { useState } from 'react'
import  Header  from './components/Header/Header'
import  Home  from './components/Home/Home'
import  Footer  from './components/Footer/Footer'
import  Contact  from './components/Contact/Contact'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

     <Header />
     <Home />
     <Contact />
     <Footer />

    </>
  )
}

export default App
