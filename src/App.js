import logo from './logo.svg';
import './App.css';

function App() {

  const name = <h1>Matthew Kettelkamp</h1>;

  return (

    <div className="App">
      <GetName name="Matthew Kettelkamp" />
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

export default App;
