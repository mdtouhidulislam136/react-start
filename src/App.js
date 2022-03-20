
import './index.css';

const  name = 'Md Touhidul Islam';

let students = [
                  {name: 'rana', from: 'borisal', roll: 234, sex: 'male'},
                  {name: 'korbir', from: 'rangpur', roll: 456, sex: 'male'},
                  {name: 'agaur', from: 'bogura', roll: 345, sex: 'male'},
                  {name: 'sadia', from: 'rajshahi', roll: 343, sex: 'female'}]

function App() {
  return (
    <div className="App">
     <Person name="sheikh robin" from="Bangladesh" future="developer"></Person>
    <Friend></Friend>
    {
      students.map(student => <Student name={student.name} sex={student.sex} from={student.from}></Student>)
    }
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

function Student (props) {

  return (
    <div id="student-details">
      <li>{props.name}</li>
      <li>{props.sex}</li>
      <li>{props.from}</li>
    </div>
  );
}