interface GameCardProps {
  game: {
    url: string;
    title: string;
    description: string;
    releaseDate: string;
  }
}

const GameCard = ({ game }: GameCardProps) => {

  const onFavouriteClick = () => {
    alert("Favourite added");
  }
  return (
    <div className="game-card">
      <div className="game-poster">
        <img src={game.url} alt={game.title} />
        <div className="game-overlay">
          <button className="favourite-btn" onClick={onFavouriteClick}>❤</button>
        </div>
      </div>
      <div className="game-info">
        <h3>{game.title}</h3>
        <p>{game.description}</p>
        <p>{game.releaseDate}</p>
      </div>
    </div>
  );
}

export default GameCard;