import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Task } from "./Task";
import Axios  from 'axios';

function App() {
  // STATES
  const [todo, setTodo] = useState([]);  //array for the state of the task list
  const [inputValue, setInputValue] = useState("");
  const [apiInfo, setApiInfo] = useState([]);
  const [drinkSearch, setDrinkSearch] = useState("");

  // FUNCTIONS
  const handleChange = (event) => {
    setInputValue(event.target.value);
  }
  const addTask = () => {
    const task = {
      id: todo.length === 0 ? 1 : todo[todo.length - 1].id + 1,
      taskName: inputValue,
      complete: false,
    }
    setTodo([...todo, task]);
  }
  const deleteTask = (id) => {
    setTodo(todo.filter((task) => task.id !== id));
  }
  const completeTask = (id) => {
    setTodo(todo.map((task) => {
      if (task.id === id) {
        return {...task, complete: true};
      } else {
        return task;
      }
    }));
  }

  // API PORTION-------------------------------
  const options = {
    method: 'GET',
    url: 'https://the-cocktail-db.p.rapidapi.com/search.php',
    params: {s: drinkSearch},
    headers: {
      'X-RapidAPI-Key': 'ae420f499dmshca2539ee3101f7ap1242b7jsn67b84461ccc8',
      'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
    }
  };
  const fetchDrinkList = () => {
    if (drinkSearch) {
      Axios.request(options).then((res) => {
        setApiInfo(res.data.drinks.map((drink) => {
          console.log(drink.strDrink);
          return { strDrink: drink.strDrink };
        }));
      }).catch((err) => {
        console.error(err);
      })
    }
  }
  useEffect(() => {
    fetchDrinkList();
  }, []);

  const drinkChange = (event) => {
    setDrinkSearch(event.target.value)
  }

  return (

    <div className="App">
      <div className='spacer'>
        <h1>To-Do List</h1>
      </div>
      <div className='addContainer'>
        <input type="text" className='textBox' onChange={handleChange} />
        <button className='mainButt' onClick={addTask}>Add Task</button>
      </div>
      <div className='taskList'>
        {todo.map((task) => {
          return <Task taskName={task.taskName} id={task.id} complete={task.complete} deleteTask={deleteTask} completeTask={completeTask} />
        })}
      </div>
      {/* API Portion */}
      <hr />
      <div className='api-container-input'>
        <div className='input-section'>
          <input className='api-input' onChange={drinkChange} />
          <button className='searchButt' onClick={fetchDrinkList}>Search</button>
        </div>
        <h4>DRINK LIST</h4>
        <div className='drinks'>
          {apiInfo.map((drink, index) => {
            return <p key={index}>{drink.strDrink}</p>
          })}
          {/* {apiInfo} */}
        </div>
      </div>
    </div>
  );
}



export default App;
