import '../css/GameCard.css'
interface GameCardProps {
  game: {
    game_url: string;
    title: string;
    short_description: string;
    release_date: string;
  }
}

const GameCard = ({ game }: GameCardProps) => {

  const onFavouriteClick = () => {
    alert(game.title+" is added as favourite!");
  }
  return (
    <div className="game-card">
      <div className="game-poster">
        <img src={game.game_url} alt={game.title} />
        <div className="game-overlay">
          <button className="favourite-btn" onClick={onFavouriteClick}>❤</button>
        </div>
      </div>
      <div className="game-info">
        <h3>{game.title}</h3>
        <p>{game.short_description}</p>
        <p>{game.release_date}</p>
      </div>
    </div>
  );
}

export default GameCard;