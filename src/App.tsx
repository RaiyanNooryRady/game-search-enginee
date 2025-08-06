import './App.css'

function App() {
  return (
    <>
      <Test text="Hello World"/>
      <Test text="Hello World 2"/>
      <Test text="Hello World 3"/>
      <Test text="Hello World 4"/>
      <Test text="Hello World 5"/>
      <Test text="Hello World 6"/>
      <Test text="Hello World 7"/>
      <Test text="Hello World 8"/>
    </>
  )
}
function Test(props:any){
  return(
    <div>
      <h1>{props.text}</h1>
    </div>
  );
}

export default App
