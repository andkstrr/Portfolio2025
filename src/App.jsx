import { useState } from 'react'
import underConstruction from './assets/under-construction.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <img src={underConstruction} alt="under construction" className="illustration" />
      <h2>Under Development :)</h2>
      <p>Please visit my <a href="https://github.com/andkstrr" target="_blank" rel="noopener noreferrer">GitHub</a></p>
    </div>
  )
}

export default App
