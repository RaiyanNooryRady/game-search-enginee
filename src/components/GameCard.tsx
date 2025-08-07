import '../css/GameCard.css'
interface GameCardProps {
  game: {
    background_image: string;
    name: string;
    rating: number;
    released: string;
    ratings_count: number;
    playtime: number;
    updated: string;
    reviews_count: number;
  }
}

const GameCard = ({ game }: GameCardProps) => {

  const onFavouriteClick = () => {
    alert(game.name+" is added as favourite!");
  }
  return (
    <div className="game-card">
      <div className="game-poster">
        <img src={game.background_image} alt={game.name} />
        <div className="game-overlay">
          <button className="favourite-btn" onClick={onFavouriteClick}>❤</button>
        </div>
      </div>
      <div className="game-info">
        <h3>{game.name}</h3>
        <p>Rating: {game.rating}</p>
        <p>Released: {game.released}</p>
        <p>Reviews: {game.reviews_count}</p>
        <p>Playtime: {game.playtime}</p>
        <p>Updated: {game.updated}</p>
        <p>Ratings Count: {game.ratings_count}</p>
      </div>
    </div>
  );
}

export default GameCard;