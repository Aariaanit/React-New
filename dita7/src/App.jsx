
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Project from './components/Project'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {

  return (

    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" elemnt={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </Router>
    </div>
  
  )
}

export default App