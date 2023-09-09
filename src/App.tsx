import './App.sass'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'

function App() {

  return (
    <div>
    <Navbar/>
      <div>
        <Hero/>
        <About/>
        <Projects/>
      </div>
    </div>
  )
}

export default App