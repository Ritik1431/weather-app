import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Body from './Components/Body/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Body/>
    </>
  )
}

export default App
