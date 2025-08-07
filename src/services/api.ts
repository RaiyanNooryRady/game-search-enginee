const BASE_URL = "https://www.freetogame.com/api/games";

export const getNewGames = async () =>{
    const response = await fetch(`${BASE_URL}?sort-by=release_date`);
    const data = await response.json();
    return data;
}
export const searchGames = async (query: string) => {
    const response = await fetch(`${BASE_URL}?search=${query}`);
    const data = await response.json();
    return data;
}