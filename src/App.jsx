import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Dashboard from './components/Dashboard'
import { Toaster } from 'react-hot-toast'
function App() {

  return (
    <>
    <Toaster position='top-right' />
     <Dashboard></Dashboard>
    </>
  )
}

export default App
