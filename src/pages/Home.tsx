//import games from '../assets/games'
import GameCard from '../components/GameCard'
import { useState, useEffect } from 'react'
import '../css/Home.css'
import { getAllGames } from '../services/api'

const Home = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [games, setGames] = useState<any[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const loadAllGames = async () => {
            try {
                const dataAllGames = await getAllGames();
                setGames(dataAllGames);
            } catch (error) {
                console.error('Failed to fetch games', error);
                setError(error as Error);
            }
            finally{
                setLoading(false);
            }
        }
        loadAllGames();
    }, []);
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        alert('you searched for ' + searchQuery);
    }
    return (
        <div className="home">
            <h1 className="home-title">Games</h1>
            <form onSubmit={handleSearch} className='search-form' action="">
                <input type="text" placeholder='Search games' className='search-input' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button type='submit' className='search-button'>Search</button>
            </form>
            {loading && <div className="loading">Loading games...</div>}
            {error && <div className="error">Error loading games: {error.message}</div>}
            <div className="games-grid">
                {
                    games.map((game) => {
                        if (searchQuery && !game.name.toLowerCase().includes(searchQuery.toLowerCase())) {
                            return null;
                        }
                        return <GameCard game={game} key={game.id} />
                    })
                }
            </div>


        </div>

    )
}

export default Home;