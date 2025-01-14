import './App.css';
import './App.css';

//normal import method using 'curly braces{}'
//import { Card } from './Card';

// default import method without using {curly braces}
import Card from './Card';

function App() {
  return (
    <div className="App">
      <Card cardName="FName"/>
      <Card cardName="Age" inpType="number"/>
      <Card cardName="DOB" inpType="date"/>
    </div>
  );
}

export default App;
