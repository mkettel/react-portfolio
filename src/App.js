import logo from './logo.svg';
import './App.css';

function App() {

  const name = <h1>Matthew Kettelkamp</h1>;
  const age = 27;
  const isRed = false;

  return (

    <div className="App">
      <GetName name="Matthew Kettelkamp" />
      <GridArea grid1="HTML" grid2="SCSS" grid3="Javascript" grid4="Ruby" grid5="Rails" grid6="React"/>

      <div>
        {age > 25 ? <h3>You're a badass</h3> : <h3>You're young but almost old</h3>}
        <h2 style={{color: isRed ? "red" : "black"}}>Get After It</h2>
        {isRed && <button>Jump In</button>}     {/* adds a button if isRed is true */}
      </div>
    </div>
  );
}

// Name Component
const GetName = (props) => {
  return (
  <div className='header'>
    <h1>{props.name}</h1>
  </div>
  );
};

// Skills Component
const GridArea = (props) => {
  return (
  <div className='skills-container'>
    <div className='skill'>
      <p>{props.grid1}</p>
    </div>
    <div className='skill'>
      <p>{props.grid2}</p>
    </div>
    <div className='skill'>
      <p>{props.grid3}</p>
    </div>
    <div className='skill'>
      <p>{props.grid4}</p>
    </div>
    <div className='skill'>
      <p>{props.grid5}</p>
    </div>
    <div className='skill'>
      <p>{props.grid6}</p>
    </div>
  </div>
  )
}

export default App;
