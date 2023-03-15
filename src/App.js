import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Task } from "./Task";

function App() {
  // STATES
  const [todo, setTodo] = useState([]);  //array for the state of the task list
  const [inputValue, setInputValue] = useState("");
  const [color, setColor] = useState("black");

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
    }))
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


    </div>
  );
}



export default App;
