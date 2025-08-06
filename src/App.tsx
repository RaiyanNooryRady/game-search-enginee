import './App.css'

interface TestProps{
  text:string;
  color:string;
}
function App() {
  return (
    <>
      <Test text="Hello World" color="red"/>
      <Test text="Hello World 2" color="blue"/>
      <Test text="Hello World 3" color="green"/>
      <Test text="Hello World 4" color="yellow"/>
      <Test text="Hello World 5" color="purple"/>
      <Test text="Hello World 6" color="orange"/>
      <Test text="Hello World 7" color="red"/>
      <Test text="Hello World 8" color="brown"/>
    </>
  )
}
function Test({text,color}:TestProps){
  return(
    <div>
      <h1 style={{color:color}}>{text}</h1>
    </div>
  );
}

export default App
