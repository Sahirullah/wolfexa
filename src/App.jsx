import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Themes from './components/Themes'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <Hero />
        <Categories />
        <Themes />
        <Reviews />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
