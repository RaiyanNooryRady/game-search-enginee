import games from '../assets/games'
import GameCard from '../components/GameCard'
import { useState } from 'react'
const Home = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        alert(searchQuery);
    }

    return (
        <div className="home">
            <h1 className="home-title">Games</h1>
            <form onSubmit={handleSearch} className='search-form' action="">
                <input type="text" placeholder='Search games' className='search-input' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} />
                <button type='submit' className='search-button'>Search</button>
            </form>
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