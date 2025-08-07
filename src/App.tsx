import Home from './pages/Home'
import Favorites from './pages/Favorites'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar'
import './css/App.css'
import { GameProvider } from './contexts/GameContext'
function App() {
  return (
    <GameProvider>
      <main className='main-content'>
        <BrowserRouter>
          <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </BrowserRouter>
      </main>
    </GameProvider>
  )
}

export default App;
