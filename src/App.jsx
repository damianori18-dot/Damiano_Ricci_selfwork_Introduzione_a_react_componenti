import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import List from './components/List'
import Hero from './components/hero'
import Components from './components/components'

function App() {
  const listItems = ['Meta', 'Netflix', 'Airbnb'];
  return (
    <>
      <Navbar />
      <Hero />
      <Header />
      <List items={listItems}/>
      <Components/>
    </>
  )
}

export default App
