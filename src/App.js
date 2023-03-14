import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const name = <h1>Matthew Kettelkamp</h1>;
  const isRed = false;
  const skills = ["HTML", "CSS", "SCSS", "Javascript", "Ruby", "Rails", "React", "Github", "Figma"];
  const projects = [
    { name: "filmy-j", skills: "HTML"},
    { name: "Deepwork.", skills: "SCSS"},
    { name: "Defit", skills: "RUBY HTML CSS SCSS"},
  ]
  const doctors = [
    {name: "Millet", isSteadman: true},
    {name: "Gnirke", isSteadman: false},
    {name: "Philippon", isSteadman: true},
    {name: "Vidal", isSteadman: false},
    {name: "Godin", isSteadman: true},
    {name: "Braxton", isSteadman: false},
  ]
// State Practice

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  // create a state:
  const [hideContent, setHideContent] = useState(true);


  return (

    <div className="App">
      <GetName name="Matthew Kettelkamp" />

      <button onClick={() => {
        setHideContent(!hideContent);
      }}>Hide All Text</button>



      {/* grid list attempt */}
      { hideContent && <div className='skills-container'>
        {skills.map((skill, index) => {
          return (
            <div className='skill'>
              <p> {skill} </p>
            </div>
          )
        })}
      </div> }

      {/* Projects grid */}
      { hideContent && <div className='skills-container'>
        {projects.map((project, key) => {
          return (
            <div className='skill'>
              <h3 className='project-title'> {project.name} </h3>
              <p className='project-lang'> {project.skills} </p>
            </div>
          )
        })}
      </div> }

      {/* Doctors Container */}
      {hideContent && <div className='doctor-container'>
        <div className='doc-header'>
          <h3>Steadman Doctors</h3>
        </div>
        <div className='doc-list'>
          {doctors.map(
            (doctor, key) => !doctor.isSteadman && <p> {doctor.name} </p>
          )}
        </div>
      </div> }


    </div>
  );
}


// ---------------------------------------
// Name Component
const GetName = (props) => {
  return (
  <div className='header'>
    <h1>{props.name}</h1>
  </div>
  );
};

// Doctor Component
const SteadmanDoc = (props) => {
  return (
    <div className='doctor-container'>

    </div>
  )
}

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
