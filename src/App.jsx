import './App.css'
import Exercises from './Components/Exercises/Exercises'
import Home from './Components/Home/Home'
import NavBar from './Components/NavBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/exercises" element = {<Exercises muscle="back"/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
