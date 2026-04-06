import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Board } from './pages/Board/Board'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Board />} />
        {/* Keep old route as redirect */}
        <Route path="/board" element={<Board />} />
      </Routes>
    </Router>
  )
}

export default App
