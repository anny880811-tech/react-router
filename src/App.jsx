import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './pages/home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="contanier mt-3">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
