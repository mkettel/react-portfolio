import logo from './logo.svg';
import './App.css';
import { useState, useEffect, createContext } from 'react';
// import { Task } from "./Task";
import Axios  from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/home';
import { Profile } from './pages/profile';
import { Navbar } from './navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


export const AppContext = createContext();


function App() {


  // STATES
  const [username, setUsername] = useState("Matt Kettelkamp");
  // const [todo, setTodo] = useState([]);  //array for the state of the task list
  const client = new QueryClient();


  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='*' element={<h1>Page Not Found</h1>} />
          </Routes>
        </Router>
        </AppContext.Provider>
      </QueryClientProvider>
    </div>
  );
}



export default App;
