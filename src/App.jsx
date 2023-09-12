import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.scss'
import Caroussel from './caroussel/Caroussel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Caroussel />} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
