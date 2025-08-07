const BASE_URL = "https://api.rawg.io/api/games";
const API_KEY = "3e5a4e4a598d44e5b30c4057f15dc8e6";
export const getAllGames = async () =>{
    const response = await fetch(`${BASE_URL}?key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}