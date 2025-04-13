import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './app.css'
import List  from "./pages/favourites/list"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <List/>
    </>
  )
}

export default App
