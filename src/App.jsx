import './App.css'
import Header from './components/Header.jsx'
import About from './components/About'
import Home from './pages/Home'
import Work from './components/Work'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {

  return (
    <div id='Home'>
    <Header />
    <Home />
    <About />
    <Work />
    <Projects />
    <Footer />
    </div>
  )
}

export default App
