import games from '../assets/games'
import GameCard from '../components/GameCard'
const Home = () => {


    return (
        <div>
            <h1>Games</h1>
            {
                games.map((game)=>{
                    return <GameCard game={game}/>
                })
            }

        </div>

    )
}

export default Home;