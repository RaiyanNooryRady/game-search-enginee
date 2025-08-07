import './App.css'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar'
function App() {
  return (
    <main className='main-content'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App;
