import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Board } from './pages/Board/Board'

// Main App component with routing configuration
function App() {
  return (
    // Router wrapper for handling navigation between pages
    <Router>
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<Home />} />
        
        {/* Board page route */}
        <Route path="/board" element={<Board />} />
      </Routes>
    </Router>
  )
}

export default App
