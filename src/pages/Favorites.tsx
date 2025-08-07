import '../css/Favorites.css'
import { useGameContext } from '../contexts/GameContext'
import GameCard from '../components/GameCard'
const Favorites = () => {
  const { favorites } = useGameContext();
  if (favorites.length === 0) {
    return (
      <div className="favorites-empty">
        <h2>No favorites</h2>
        <p>Start adding games to favorites and they will appear here.</p>
      </div>
    )
  }
  return (
    <div className="games-grid">
      {
        favorites.map((game: any) => {
          return <GameCard game={game} key={game.id} />
        })
      }
    </div>
  )
}

export default Favorites;