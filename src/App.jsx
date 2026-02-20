import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Showcase } from './components/Showcase'
import { About } from './components/About'
import { Strategies } from './components/Strategies'
import { Features } from './components/Features'
import { Team } from './components/Team'
import { Testimonials } from './components/Testimonials'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Showcase />
        <About />
        <Strategies />
        <Features />
        <Team />
        <Testimonials />
      </main>
    </div>
  )
}

export default App
