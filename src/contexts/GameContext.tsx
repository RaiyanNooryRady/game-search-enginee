import { createContext, useState, useContext, useEffect } from 'react';

const GameContext = createContext<any>(null);

export const useGameContext = () => {
    return useContext(GameContext);
}

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
    const [favorites, setFavorites] = useState<any[]>([]);
    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if(storedFavorites){
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    
    const addFavorite = (game: any) => {
        setFavorites([...favorites, game]);
    }   

    const removeFavorite = (game: any) => {
        setFavorites(favorites.filter((g) => g.id !== game.id));
    }
    const isFavorite = (game: any) => {
        return favorites.some((g) => g.id === game.id);
    }

    const value = {
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite
    }
    
    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    )
}