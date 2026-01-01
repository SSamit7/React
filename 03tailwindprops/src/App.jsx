import React from 'react'
import Card from './components/card.jsx'

function App() {
  let username="John Doe"

  return (
    <>
      <h1 className='bg-green-300'>Tailwind Css</h1>
      <Card username={username} />
      <Card username="Chai aur code" />
      
      </>
  )
}


export default App
