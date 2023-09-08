import './App.sass'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

function App() {

  return (
    <div>
    <Navbar/>
      <div>
        <Hero/>
        <About/>
      </div>
    </div>
  )
}

export default App