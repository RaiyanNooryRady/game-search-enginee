import games from '../assets/games'
import GameCard from '../components/GameCard'
const Home = () => {


    return (
        <div className="home">
            <h1 className="home-title">Games</h1>
            <div className="games-grid">
                {
                    games.map((game) => {
                        return <GameCard game={game} key={game.id} />
                    })
                }
            </div>


        </div>

    )
}

export default Home;