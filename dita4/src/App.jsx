import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/contact'
import Navbar from './components/Navbar'
import Button from './components/Button'


function App() {

  return (

    <div className="App">
      <Navbar />
      <div className="content">
        <Button />
      </div>
    </div>
  
  )
}

export default App