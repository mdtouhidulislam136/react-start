
import './index.css';

const  name = 'Md Touhidul Islam'
function App() {
  return (
    <div className="App">
     <Person name="sheikh robin" from="Bangladesh" future="developer"></Person>
    <Friend></Friend>
   
  
    
    
     
    </div>
  );
}

export default App;


function Person  (props)  {
console.log(props);
  return (

    <div className="person">
      <h1>{name} </h1>
      <h2>{props.name}</h2>
      <h2>{props.from}</h2>
      <h2>{props.future}</h2>
      <h1>Get well soon</h1>
    </div>
  );
}
function Friend  ()  {

  return (

    <div className="person">
      <h1>{name} </h1>
      <h1>Good boy</h1>
    </div>
  );
}