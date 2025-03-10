import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import ServiceCard from './components/ServiceCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center align-item min-h-screen bg-gray-500'>
        <ServiceCard />
      </div>
       </>
  )
}

export default App



