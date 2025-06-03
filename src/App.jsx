import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Skills from './pages/Skills'
function App() {


  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
    </div>
  )
}

export default App
