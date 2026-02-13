import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import VUHandout from './pages/VUHandout'
import AIUHandout from './pages/AIUHandout'
import FinalTerm from './pages/FinalTerm'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/vu-handout" element={<VUHandout />} />
            <Route path="/aiu-handout" element={<AIUHandout />} />
            <Route path="/final-term" element={<FinalTerm />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
