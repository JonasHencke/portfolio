import './App.sass'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

  return (
    <div>
    <Navbar/>
      <div>
        <Hero/>
        <About/>
        <Projects/>
        <Skills/>
      </div>
    </div>
  )
}

export default App