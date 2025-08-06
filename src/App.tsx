import './App.css'
import GameCard from './components/GameCard'
const game1={
  url:"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
  title:"Google",
  description:"Google is a search engine",
  releaseDate:"2025-01-01"
}
const game2={
  url:"https://picsum.photos/id/237/200/300",
  title:"Soogle",
  description:"Soogle is a search engine",
  releaseDate:"2025-01-06"
}
function App() {
  return (
    <>
      <GameCard game={game1}/>
      <GameCard game={game2}/>
    </>
  )
}

export default App
