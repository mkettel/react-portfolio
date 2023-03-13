import logo from './logo.svg';
import './App.css';

function App() {

  const name = <h1>Matthew Kettelkamp</h1>;

  return (

    <div className="App">
      <GetName />
    </div>
  );
}

// Name Component
const GetName = () => {
  return (
  <div className='header'>
    <h1>Matthew Kettelkamp</h1>
  </div>
  );
};

export default App;
